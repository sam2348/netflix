import React, { useState, useEffect } from "react";
import axios from "axios";
import { Rating } from "react-simple-star-rating";
import { NavLink } from "react-router-dom";

function Home() {
  const [film, setFilm] = useState([]);
  const [user, setUser] = useState({
    MovieName: "",
    link: "",
    photoLink: "",
    rating: "",
    releseDate: "",
    description: "",
    logo: "",
    movieGenre:"",
  });
  console.log(user)
  useEffect(() => {
    loadUser();
    loadUsers();
  }, []);
  const loadUser = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setFilm(result.data);
  };
 ;
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users?rating=4.8");
    setUser({
      MovieName: result.data.MovieName,
      link: result.data.link,
      photoLink: result.data.photoLink,
      rating: result.data.rating,
      description: result.data.description,
      logo: result.data.logo,
      movieGenre: result.data.movieGenre,
    });
  };
  return (
    <>

<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
  {user.map((abc, id) => (
            <div key={id}>
    <div className="carousel-item active" data-bs-interval="1000">
      <img src={abc.link} className="d-block w-100" alt=""height="650px"/>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
      <img src={abc.link} className="d-block w-100" alt=""height="650px"/>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
      <img src={abc.link} className="d-block w-100" alt=""height="650px"/>
    </div>
  </div>
   ))}
  </div>
  </div>
  
  {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}

      <div className="bg-dark">
      <div className="container bg-dark text-light mt-2">
        <div className="row row-cols-1 row-cols-md-3">
          {film.map((abc, id) => (
            <div key={id}>
              <div
                className="card me-2 mt-3 text-light bg-dark rounded-5 "
                style={{ width: "21rem" }}
              >
                <div className=" p-1 pb-0 d-flex justify-content-between">
                  <h6 className="card-title">Movie</h6>
                  <h6 className="card-text">{abc.releseDate}</h6>
                </div>
                <div>
                <NavLink
                  to={`/NextPage/${abc.MovieName}`}
                >
                  <img
                    src={abc.photoLink} height={250} width={250}
                    className="card-img-top rounded-5"
                  />
                </NavLink>
                </div>
                
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