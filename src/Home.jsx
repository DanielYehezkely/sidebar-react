import React from "react";

import { useGlobalContext } from "./context/AppContext";
import {FaBars} from 'react-icons/fa'

const Home = () => {

  const {openSidebar, openModal} = useGlobalContext();
  

  return <main>
  <button 
  onClick={openSidebar} 
  className="sidebar-toggle">
    <FaBars/>
  </button>
  <button 
  onClick={openModal} 
  className="btn">
    Click To Show Modal
  </button>
  </main>;
};

export default Home;
