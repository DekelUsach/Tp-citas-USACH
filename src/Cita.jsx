import React from "react";

export default function Cita({ mascota, propietario, fecha, hora, sintomas, onEliminar }) {
  return (
    <div className="cita">
      <p>Mascota: <span>{mascota}</span></p>
      <p>Propietario: <span>{propietario}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Síntomas: <span>{sintomas}</span></p>
      <button
        type="button"
        className="button eliminar u-full-width"
        onClick={onEliminar}
      >
        Eliminar ×
      </button>
    </div>
  );
}
