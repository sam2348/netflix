import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";



function ActionMovie() {
  const [actionList, setActionList] = useState();
  const [loading, setLoading] = useState(true);
  console.log(actionList,"agyok")

  const GetActionMovieList =async()=>{

    try{
      
      const result = await axios.get("http://localhost:3003/users?movieGenre=Action");
      setActionList(result.data);
      setLoading(false);
  
    }catch(err){
      alert(err.message)
    }
  }
    useEffect(() => {
      GetActionMovieList();
    }, []);
  return (
    <>
    
    {loading ? (<div>loading..</div> ) : 
        (
   <div className="bg-dark">
      <div className="container bg-dark text-light mt-0">
      <h2>Action Movie</h2>
        <div className="row row-cols-1 row-cols-md-3">
          {actionList.map((abc, id) => (
            <div key={id}>
              <div
                className="card me-2  text-light bg-dark rounded-5 "
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
       ) }

    </>
  )
}

export default ActionMovie