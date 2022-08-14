import React from 'react';
import Navbar from './components/Navbar';
import AddUser from './components/AddUser';
import NextPage from './components/NextPage';
import Home from './components/Home';
import Try from './components/Try';
import Login from './components/Login';
import Signup from './components/Signup';
import Movie from './components/Movie';
import Search from './components/Search';
import {Routes,Route,} from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
         <Route path="/NextPage/:MovieName" element={<NextPage />} />
         <Route path="/" element={<Home />} />
         <Route path="/Try" element={<Try />} />
         <Route path="/Login" element={<Login />} />
         <Route path="/Signup" element={<Signup />} />
         <Route path="/Movie" element={<Movie />} />
         <Route path="/Search" element={<Search />} />
        <Route path="/AddUser" element={<AddUser />} />
      </Routes>
    </>
  )
}

export default App