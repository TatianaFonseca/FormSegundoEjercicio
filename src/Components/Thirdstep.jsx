function Thirdstep({ data }) {
  return (
    <fieldset>
      <legend>Paso 3: Confirmación</legend>
      <p> <strong>Confirma tu información:</strong> </p>

       <ul> <strong>Nombre:</strong> {data.name}</ul>
       <ul> <strong>Correo:</strong> {data.email}</ul>
       <ul> <strong>Opción:</strong> {data.option}</ul>

    </fieldset>
  );
}

export default Thirdstep;
