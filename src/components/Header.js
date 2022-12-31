import React from "react";
import logo from "../images/troll.png"

const Header= ()=>{
    return (
      <nav>
        <div className="header">
          <img src={logo} alt="troll" className="logo"></img>
          <p className="nav-title">Meme Generator</p>
        </div>
        <p className="nav-subtitle">React Course - Project 3</p>
      </nav>
    );
}

export default Header;