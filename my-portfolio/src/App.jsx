import Navbar from "./assets/Components/Navbar";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import About from "./assets/Components/About";
import Skills from "./assets/Components/Skills";
import Project from "./assets/Components/Project";
import Contact from "./assets/Components/Contact";
import Home from './assets/Components/Home';

function App() {

  
  return (
    <>
   

      <div className="body max-w-[3000px] h-[4000px] overflow-x-hidden ">
        <Navbar className="" />

        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/About"} element={<About />} />
          <Route path={"/Skills"} element={<Skills />} />
          <Route path={"/Project"} element={<Project />} />
          <Route path={"/Contact"} element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
