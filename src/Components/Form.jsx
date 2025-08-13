import React, { useState } from "react";
import Step1 from "./Firststep";
import Step2 from "./Secondstep";
import Step3 from "./Thirdstep";
import Stepper from "./Stepper"; 

function Form() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    option: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const steps = ["Información Personal", "Opciones", "Confirmación"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.name.trim()) {
        newErrors.name = "Se debe escribir el nombre";
      }
      if (!formData.email.trim()) {
        newErrors.email = "Se debe escribir el correo";
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          newErrors.email = "Correo inválido";
        }
      }
    }
    if (step === 2 && !formData.option) {
      newErrors.option = "Selecciona una de las opciones";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) setStep(step + 1);
  };

  const handleBack = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return <p aria-live="polite">Gracias por enviar.</p>;
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <Stepper steps={steps} currentStep={step} />

      {step === 1 && (
        <Step1 data={formData} onChange={handleChange} errors={errors} />
      )}
      {step === 2 && (
        <Step2 data={formData} onChange={handleChange} errors={errors} />
      )}
      {step === 3 && <Step3 data={formData} />}

      <div style={{ marginTop: "1rem" }}>
        {step > 1 && (
          <button type="button" onClick={handleBack}>
            Atrás
          </button>
        )}
        {step < 3 && (
          <button type="button" onClick={handleNext}>
            Siguiente
          </button>
        )}
        {step === 3 && <button type="submit">Enviar</button>}
      </div>
    </form>
  );
}

export default Form;