import React from "react";
import "./ContactForm.css";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      mail: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required()
        .min(2, "Demasiado Corto")
        .max(50, "Muy Largo"),
      apellido: Yup.string()
        .required()
        .min(2, "Demasiado Corto")
        .max(100, "Muy Largo"),
      mail: Yup.string().email().required(),
    }),
  });

  return (
    <div className="formulario">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Label>Formulario</Form.Label>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="nombre"
            name="nombre"
            onChange={formik.handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="apellido"
            name="apellido"
            onChange={formik.handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="mail"
            name="mail"
            onChange={formik.handleChange}
          ></Form.Control>
        </Form.Group>
        <Button variant="success" type="submit">
          Ingresar
        </Button>
        <Button variant="danger" type="button">
          Borrar
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
