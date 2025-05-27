import React, { useState, useEffect } from "react";
import CitasContainer from "./CitasContainer";
import Formulario from "./Formulario";

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
      <h1 className="titulo">ADMINISTRADOR DE PACIENTES</h1>

      <div className="container">
        <div className="row">
          <Formulario onNuevaCita={crearCita} />
          <CitasContainer citas={citas} onEliminarCita={eliminarCita} />
        </div>
      </div>
    </>
  );
}

export default App;
