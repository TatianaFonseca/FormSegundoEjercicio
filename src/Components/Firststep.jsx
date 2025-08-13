import React from "react";

function Firststep({ data, onChange, errors }) {
  return (
    <fieldset>
      <h2> Información personal</h2>

      <label htmlFor="name">Nombre:</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Tu nombre"
        value={data.name}
        onChange={onChange}  /*para poder cambiar el estado del formulario*/
        required
      />
      {errors.name && (
        <div aria-live="polite" style={{ color: "red" }}>
          {errors.name}
        </div> /*ver el div y porque no los otros */
      )}

      <br />

      <label htmlFor="email">Correo:</label>
<input
        id="email"
        type="email"
        name="email"
        placeholder="Tu correo"
        value={data.email}
        onChange={onChange}
        required
        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
        title="Ingresa un correo válido (ejemplo@dominio.com)"
        className="border rounded px-4 py-2 w-full"
/>

      {errors.email && (
        <div aria-live="polite" style={{ color: "red" }}>
          {errors.email}
        </div>
      )}
    </fieldset>
  );
}

export default Firststep;
