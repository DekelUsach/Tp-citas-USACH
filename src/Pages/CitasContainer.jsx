import React from "react";
import Cita from "../Cita";

export default function CitasContainer({ citas, onEliminarCita }) {
  return (
    <>
      <h1 className="titulo">ADMINISTRADOR DE PACIENTES</h1>
      <div className="justify">
        <div className="one-half column">
          <h2>Administra tus citas</h2>
          {citas.length === 0 ? (
            <p>No hay citas aún</p>
          ) : (
            citas.map((cita, index) => (
              <Cita
                key={index}
                mascota={cita.mascota}
                propietario={cita.propietario}
                fecha={cita.fecha}
                hora={cita.hora}
                sintomas={cita.sintomas}
                onEliminar={() => onEliminarCita(index)}
              />
            ))
          )}
        </div>
        </div>
    </>
  );
}
