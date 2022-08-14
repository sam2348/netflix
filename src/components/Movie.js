import React, { useState, useEffect } from "react";
import axios from "axios";
import { Rating } from "react-simple-star-rating";
import { NavLink } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Movie() {
    const [film, setFilm] = useState([]);
    const [loading, setLoading] = useState(true);
    const [trandingList, setTrendimgList] = useState();
    console.log(trandingList,"gggggg")
  
    const GetMovie =async()=>{
  
      try{
        const result = await axios.get("http://localhost:3003/users");
  
        setFilm(result.data);
  
      }catch(err){
        alert(err.message)
      }
    }
  const GetTendingMovieList =async()=>{
  
    try{
      
      const result = await axios.get("http://localhost:3003/users?rating=4.5");
      setTrendimgList(result.data);
      setLoading(false);
  
    }catch(err){
      alert(err.message)
    }
  }
    useEffect(() => {
  
      GetMovie();
      GetTendingMovieList();
  
    }, []);
  

  return (
    <>
      {loading ? (<div>loading..</div> ) : 
        (
            <Carousel>
              {
                trandingList.map((data,id)=>{
                  return(
                    <>
                  <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active" data-bs-interval="1000">
                        <img src={data.link} className="d-block w-100" alt=""height="650px"/>
                      </div>
                      {/* <div className="carousel-item" data-bs-interval="1000">
                        <img src={data.link} className="d-block w-100" alt=""height="650px"/>
                      </div>
                      <div className="carousel-item" data-bs-interval="1000">
                        <img src={data.link} className="d-block w-100" alt=""height="650px"/>
                      </div> */}
                    </div>
                    </div>
                  </>
                  )
                })
              }
             
           </Carousel>
      ) }
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

export default Movie;