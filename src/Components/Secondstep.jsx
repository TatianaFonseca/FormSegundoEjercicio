function Secondstep({ data, onChange, errors }) {
  return (
    <fieldset>
      <legend> Selección</legend>

      <p>¿Cual de las opciones quieres elegir?</p>

      <label>
        <input
          type="radio"
          name="option"
          value="opcion1"
          checked={data.option === "opcion1"}
          onChange={onChange}
        />
        Opción 1
      </label>

      <br />

      <label>
        <input
          type="radio"
          name="option"
          value="opcion2"
          checked={data.option === "opcion2"}
          onChange={onChange}
        />
        Opción 2
      </label>

      {errors.option && (
        <div aria-live="polite" style={{ color: "red" }}>
          {errors.option}
        </div>
      )}
    </fieldset>
  );
}

export default Secondstep;
