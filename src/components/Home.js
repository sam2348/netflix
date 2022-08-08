import React, { useState, useEffect } from "react";
import axios from "axios";
import { Rating } from "react-simple-star-rating";
import { NavLink } from "react-router-dom";

function Home() {
  const [film, setFilm] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setFilm(result.data);
  };
  return (
    <>
      <div className="bg-dark">
      <div className="container py-5 bg-dark text-light mt-4">
        <div className="row row-cols-1 row-cols-md-3">
          {film.map((abc, id) => (
            <div key={id}>
              <div
                className="card me-2 mt-3 text-light bg-dark rounded-5 "
                style={{ width: "21rem" }}
              >
                <div className=" p-1 pb-0 d-flex justify-content-between">
                  <h6 className="card-title">Movie</h6>
                  <h6 className="card-title">{abc.releseDate}</h6>
                </div>
                <NavLink
                  to="/NextPage/${abc.MovieName}"
                >
                  <img
                    src={abc.photoLink} height={250} width={250}
                    className="card-img-top rounded-5"
                  />
                </NavLink>
                {/* <Rating initialValue={abc.rating} size="25px" />
                <div className="card-title ms-1">
                  <h4>{abc.MovieName}</h4>
                  <p className="card-text">{abc.description}</p>
                  <a
                    href={abc.photoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {abc.photoLink}
                  </a> 
                </div>*/}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default Home;




<div class="logo-container logo-other">
<img src="https://occ-0-2484-3662.1.nflxso.net/dnm/api/v6/LmEnxtiAuzez
XBjYXPuDgfZ4zZQ/AAAABW6fTMd9Zku32b9tPN86KsCY3vbaF3jr7plMlwo8zgkyavVJiP
hQZZX1xSRtlw7X6tfxAhY2SvBD6wBWRa05axZlK_Tg8Z8zX3pi_tSkmCS8.png?r=f58" 
alt="Spider-Man: Far from Home" class="logo" data-uia="title-logo"/></div>