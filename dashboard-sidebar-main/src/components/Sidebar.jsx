import React, { useState } from 'react';
import {
    FaWrench,
    FaBars,
    FaBook,
    FaRegPlayCircle,
    FaHome,
    FaRegSun,
    FaChartLine,
    FaLink
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/connection",
            name:"Connection",
            icon:<FaLink/>
        },
        {
            path:"/configuration",
            name:"Configuration",
            icon:<FaWrench/>
        },
        {
            path:"/motion",
            name:"Motion",
            icon:<FaRegPlayCircle/>
        },
        {
            path:"/monitoring",
            name:"Monitoring",
            icon:<FaChartLine/>
        },
        {
            path:"/parameters",
            name:"Parameters",
            icon:<FaRegSun/>
        },
        {
            path:"/manual",
            name:"Manual",
            icon:<FaBook/>
        },
        {
            path:"/homepage",
            name:"Homepage",
            icon:<FaHome/>
        },
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <a href="/main" style={{display: isOpen ? "block" : "none"}} className="logo">UNIGO</a>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
                {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
                }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;