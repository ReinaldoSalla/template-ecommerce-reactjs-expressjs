/*
import React, { useState, Fragment } from "react";
import Topbar from "./components/Topbar";
import Courosel from "./components/Courosel";
import Trending from "./components/Trending";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import "./App.css"

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const containerOpacityClassName = isSidebarVisible
    ? "container-opacity-on"
    : "container-opacity-off";
  const sidebarIconClassName = isSidebarVisible
    ? "sidebar-icon-on"
    : "sidebar-icon-off";
  const sidebarContentClassName = isSidebarVisible
    ? "sidebar-content-on"
    : "sidebar-content-off";
  
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

	return (
		<Fragment>
			<Topbar 
        sidebarIconClassName={sidebarIconClassName}
        sidebarContentClassName={sidebarContentClassName}
        toggleSidebar={toggleSidebar}
      />
      <div className={containerOpacityClassName}>
  			<Courosel />
  			<Trending />
  			<Categories />
        <Footer />
      </div>
		</Fragment>                                                        
	);
};

export default App;     
*/

import React from "react";
import js1 from "./assets/js1.png"
import js2 from "./assets/js2.png";
import js3 from "./assets/js3.png";
import js4 from "./assets/js4.jpg";
import js5 from "./assets/js5.jpg";
import "./App.css";

const slides = [
	{
		imgUrl: js1,
		className: "first-img"
	},
	{
		imgUrl: js2,
		className: "second-img"
	},
	{
		imgUrl: js3,
		className: "third-img"
	},
	{
		imgUrl: js4,
		className: "forth-img"
	},
	{
		imgUrl: js5,
		className: "fifth-img"
	}
];


const Courosel = () => {
  return (
    <div>
      <img src={slides[0].imgUrl} alt=""/>
      <img src={slides[1].imgUrl} alt=""/>
      <img src={slides[2].imgUrl} alt=""/>
      <img src={slides[3].imgUrl} alt=""/>
      <img src={slides[4].imgUrl} alt=""/>
    </div>
  );
};

export default Courosel;