import React, { useState, useEffect } from "react";
import axios from "axios";


function Search() {
  const [name, setName] = useState('');
  const [foundUsers, setFoundUsers] = useState([]);
  console.log(foundUsers,"schii");

  const GetMovie =async()=>{
  
    try{
      const result = await axios.get("http://localhost:3003/users");

      setFoundUsers(result.data);

    }catch(err){
      alert(err.message)
    }
  }
  useEffect(() => {
  
    GetMovie();
  }, []);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = foundUsers.filter((user) => {
        return user.MovieName.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(foundUsers);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };
      
      

  return (
    <div className="container my-5 py-5">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              <span className="user-id">{user.MovieName}</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default Search;