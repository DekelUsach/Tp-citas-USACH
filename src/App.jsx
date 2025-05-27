import React, { useState, useEffect } from "react";
import CitasContainer from "./Pages/CitasContainer";
import Formulario from "./Pages/Formulario";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Pages/Home";

function App() {
  const [citas, setCitas] = useState(() => {
    const citasGuardadas = localStorage.getItem("citas");
    if (citasGuardadas != null) return JSON.parse(citasGuardadas);
    else return [];
  });

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  const crearCita = (nuevaCita) => {
    setCitas((prev) => [...prev, nuevaCita]);
  };

  function eliminarCita(indice) {
    setCitas((citasAnteriores) =>
      citasAnteriores.filter((cita, i) => i !== indice)
    );
  }

  return (
    <>
      <NavBar />
        <div className="container">
          <div className="row">
            <Routes>
            

              <Route path="/" element={<Home></Home>} />
              <Route
                path="formulario"
                element={<Formulario onNuevaCita={crearCita} />}
              />

              <Route
                path="citas"
                element={
                  <CitasContainer citas={citas} onEliminarCita={eliminarCita} />
                }
              />
              
            </Routes>
          </div>
        </div>
    </>
  );
}

export default App;
