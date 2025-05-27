import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Css/Home.css"
export default function Home() {
  return (
   <>
   <h1>Bienvenido al administrador de pacientes</h1>
   <div className='empieza'>
    <NavLink to={"/formulario"}> Empieza ya</NavLink>
   </div>
   </>
  )
}
