import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import ReactPlayer from "react-player";
import Dark from "./Video/Dark.mp4";
import { FaPlay } from 'react-icons/fa'
import { GoPlus } from 'react-icons/go'
import { BsFillInfoCircleFill } from 'react-icons/bs'



function NextPage() {
  const VideoJs = Dark;
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
    logo: "",
    movieGenre:"",
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
      logo: result.data[0].logo,
      movieGenre: result.data[0].movieGenre,
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
            <div className="bg-purpose">
            <div className="card bg-dark text-white" id="bg">
              <img
                src={users.link}
                className="card-img"
                alt="..."
                height={700}
                width={500}
                onClick={ExitPlay}
              />
              <div className="card-img-overlay w-50 ms-5" id="effect" style={{ marginTop: "120px" }}>
                <div className="try-purpose">
              <img
                src={users.logo}
                height={180}
                width={350}
              />
              <div className="d-flex mt-3">
              <h5 className="card-text me-4">Watch season 1</h5>
              <button type="button" class="btn ml-1 bt1 me-4">18+</button>
              <div className="badge bg-light text-wrap " Style="width: 2.4rem;height: 1.7rem;color:black;">
              <h6 >AD</h6>
              </div> 
              </div>
              <h6>{users.movieGenre}</h6>
                <h6 className="card-text" Style="width:390px;">
                  {users.description}
                </h6>
                <button
                  type="button"
                  className="btn me-4 mt-2 btn-light"
                  id="bts"
                  onClick={ShowPlay}
                >
                < FaPlay />
                Play
                </button>
                <button
                  type="button"
                  className="btn me-4 mt-2 btn-light"
                  id="bts"
                  onClick={ShowPlay}
                >
                < GoPlus />
                MyList
                </button>
                <button
                  type="button"
                  className="btn me-4 mt-2 btn-light"
                  id="bts"
                  onClick={ShowPlay}
                >
                < BsFillInfoCircleFill />
                More Info
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
            </div>
            </div>
    </>
  );
}

export default NextPage;
