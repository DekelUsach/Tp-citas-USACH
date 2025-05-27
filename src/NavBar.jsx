import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./Css/NavBar.css" ;

export default function NavBar() {
  return (
    <>
    
      <li >
      <ul>
          <NavLink to="/"> Home </NavLink>
        </ul>
        <ul>
          <NavLink to="/formulario">Formulario </NavLink>
        </ul>
        <ul>
          <NavLink to="/citas"> Mis citas</NavLink>
        </ul>
        
      </li>
    </>
  );
}
