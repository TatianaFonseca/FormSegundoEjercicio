# Formulario de 3 pasos

Este proyecto es un formulario dividido en 3 pasos que guía al usuario para completar su información de forma sencilla y accesible.

---

## Funcionalidad principal

- **Paso 1:** Captura de nombre y correo electrónico.
- **Paso 2:** Selección de opciones mediante boton.
- **Paso 3:** Confirmación y envío del formulario.

---

## Navegación

- Botones **“Siguiente”** y **“Atrás”** para avanzar o retroceder entre pasos.
- Botón **“Enviar”** en el último paso para enviar el formulario.
- El **Paso 1 es visible por defecto** al cargar la página.
- Al hacer clic en “Siguiente”, el formulario avanza al siguiente paso, validando los campos actuales.
- Al enviar el formulario, se muestra un mensaje **“Gracias por enviar”**.

---

## Validaciones

- El campo **nombre** es obligatorio y debe contener al menos 3 caracteres.
- El campo **correo electrónico** es obligatorio y debe tener un formato válido (ejemplo: usuario@dominio.com).
- Se muestran mensajes de error claros y amigables si alguna validación falla.
- Los mensajes de error son accesibles y se anuncian con `aria-live="polite"` para que los lectores de pantalla los detecten sin recargar.

---

## Accesibilidad

- Cada campo tiene un `<label>` asociado correctamente para facilitar la navegación.
- Se utiliza `aria-live="polite"` para que los mensajes de error y confirmación sean anunciados de forma amigable.
- El formulario permite navegación completa con teclado (tabuladores, enter, espacio).
- Se han eliminado viñetas y estilos por defecto para una mejor experiencia visual.

---

## Recomendaciones de uso y extensiones

- Puedes ajustar el número mínimo de caracteres del nombre en la validación según necesidad.
- Validar correctamente el formato del correo para evitar envíos inválidos.
- El diseño puede ser personalizado con CSS para adaptarlo a diferentes estilos.

---

## Tecnologías utilizadas

- HTML5
- CSS3 (Flexbox para layout y estilos personalizados)
- JavaScript para la lógica de pasos, validaciones y accesibilidad.

---

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/TuUsuario/TuRepositorio.git
   cd Primerejercicioboton
   npm install
   npm run dev
---

¡Gracias por usar este formulario paso a paso!

---

*Creado por Tatiana Fonseca*
