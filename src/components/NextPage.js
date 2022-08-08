import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import ReactPlayer from "react-player";
import Dark from "./Video/Dark.mp4";


function NextPage() {
  const VideoJs = Dark;
  // const poster =
  //   "https://occ-0-2484-3662.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbPXSGkNDo3cQ2rBKviUt71o_aPhcLPIcfsm8c8d2E2xEiu8qcLlAkPdMGyf6qqVK7kunauLQe9n1saLPSD6fjq-YYtIuKNcMbtO.jpg?r=d7f";
  const { MovieName } = useParams();
  console.log(MovieName);
  const [show, setShow] = useState(false);
  const [users, setUser] = useState({
    MovieName: "",
    link: "",
    photoLink: "",
    rating: "",
    releseDate: "",
    description: "",
  });

  useEffect(() => {
    loadUser();
  }, [MovieName]);
  const loadUser = async () => {
    const result = await axios.get(
      `http://localhost:3003/users?MovieName=${MovieName}`
    );
    console.log(result.data[0]);

    setUser({
      MovieName: result.data[0].MovieName,
      link: result.data[0].link,
      photoLink: result.data[0].photoLink,
      rating: result.data[0].rating,
      description: result.data[0].description,
    });
  };
  console.log(users);
  const ShowPlay = () => {
    setShow(true);
  };
  const ExitPlay = () => {
    setShow(false);
  };
  return (
    <>
    
            <div className="card bg-dark text-white" id="bg">
              <img
                src={users.link}
                className="card-img"
                alt="..."
                height={600}
                width={500}
                onClick={ExitPlay}
              />
              <div className="card-img-overlay w-50" style={{ marginTop: "120px" }}>
                <h5 className="card-title" style={{ fontSize: "60px" }}>
                  Watch {users.MovieName} Now
                </h5>
                <p className="card-text" style={{ fontSize: "25px" }}>
                  {users.description}
                </p>
                <button
                  type="button w-100"
                  className="btn btn-light"
                  id="btn"
                  style={{ fontSize: "25px" }}
                  onClick={ShowPlay}
                >
                  Play
                </button>
                {show ? (
                  <video
                    width="820"
                    height="455"
                    controls
                    className="video" 

                  >
                    <source src={`${VideoJs}/Dark.mp4`} type="video/mp4" />
                  </video>
                  
                    // <video className="player-video" controls src="./Video/Dark.mp4" type="video/mp4">
                    //   <source src="./Video/Dark.mp4" type="video/mp4"/></video>
                     
                  /* <ReactPlayer  className="video" url={VideoJs} width="850px" height="500px" controls={true} /> */
                ) : (
                  <div></div>
                )}
              </div>
            </div>
    </>
  );
}

export default NextPage;
