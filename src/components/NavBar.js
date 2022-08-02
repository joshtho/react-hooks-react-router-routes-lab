import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/" exact style={{margin: "0 6px 6px"}} activeStyle={{background: "yellow"}} >
        Home
      </NavLink>
      <NavLink to="/movies" exact style={{margin: "0 6px 6px"}} activeStyle={{background: "yellow"}} >
        Movies
      </NavLink>
      <NavLink to="/directors" exact style={{margin: "0 6px 6px"}} activeStyle={{background: "yellow"}} >
        Directors
      </NavLink>
      <NavLink to="/actors" exact style={{margin: "0 6px 6px"}} activeStyle={{background: "yellow"}} >
        Actors
      </NavLink>
    </div>

  ) 
}

export default NavBar;
