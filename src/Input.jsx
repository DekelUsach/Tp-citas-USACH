import React from 'react';

export default function Input({ tipo, name, holder, value, onChange }) {
  if (tipo === 'textarea') {
    return (
      <textarea
        name={name}
        placeholder={holder}
        value={value}
        onChange={onChange}
        className="u-full-width"
      />
    );
  }

  return (
    <input
      type={tipo}
      name={name}
      placeholder={holder}
      value={value}
      onChange={onChange}
      className="u-full-width"
    />
  );
}
