import React from 'react';
import Navbar from './components/Navbar';
import AddUser from './components/AddUser';
import NextPage from './components/NextPage';
import Home from './components/Home';
import Try from './components/Try';
import {Routes,Route,} from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
         <Route path="/NextPage/:MovieName" element={<NextPage />} />
         <Route path="/" element={<Home />} />
         <Route path="/Try" element={<Try />} />
        <Route path="/AddUser" element={<AddUser />} />
      </Routes>
    </>
  )
}

export default App