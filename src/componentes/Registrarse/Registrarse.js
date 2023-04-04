import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import CustomButton from "../BotonPersonalizado/BotonPersonalizado";
import "./Registrarse.scss";
import { Link } from "react-router-dom";

export const Registrarse = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    nombre: "",
    apellido: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    nombre: "",
    apellido: "",
    api: "",
  });
  const [apiResponse, setApiResponse] = useState(null);

  //MANEJAR LOS CAMBIOS EN EL FORMULARIO
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  //ENVIAR LOS DATOS DEL FORMULARIO A LA API O SERVIDOR
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!formData.email) {
      setError({
        error: (error.email = "Por favor el Email es requerido"),
      });
    }
    if (!formData.password) {
      setError({
        error: (error.password = "Por favor la contraseña es requerido"),
      });
    }
    if (!formData.nombre) {
      setError({
        error: (error.nombre = "Por favor el nombre es requerido"),
      });
    }
    if (!formData.apellido) {
      setError({
        error: (error.apellido = "Por favor el apellido es requerido"),
      });
    }
    if (handleChange === true) {
      <Link to="/Comprar" />;
    } else {
      alert("El valor ingresado no es correcto. Por favor, ingresa 'ejemplo'");
    }
    try {
      const res = await axios.post("http://localhost:9000/api/auth/signup", {
        email: formData.email,
        password: formData.password,
        nombre: formData.nombre,
        apellido: formData.apellido,
      }); // registro de usuario
     
      setApiResponse(res.data);
    } catch (error) {
      console.error(error);
      setApiResponse(null);
      setError({
        ...error,
        api: error.response.data.msg,
      });
    }
  };


  return (
    <div className="bg-form-registrase">
      <div className="text-center registro-usuario">
        <h3 className="pt-4">Registro de usuario</h3>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupEmailRegistro">
          <Form.Label>Email address</Form.Label>
          <Form.Control
          className="input-email"
            type="email"
            name="email"
            value={formData.email}
            placeholder="EMAIL"
            onChange={handleChange}
          />
          <div>{error.email && <p>{error.email}</p>}</div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPasswordRegistro">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            placeholder="CONTRASEÑA"
            onChange={handleChange}
          />
          <div>{error.password && <p>{error.password}</p>}</div>
        </Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="nombre"
          name="nombre"
          value={formData.nombre}
          placeholder="NOMBRE"
          onChange={handleChange}
        />
        <div>{error.nombre && <p>{error.nombre}</p>}</div>
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="apellido"
          name="apellido"
          value={formData.apellido}
          placeholder="APELLIDO"
          onChange={handleChange}
        />
        <div>{error.apellido && <p>{error.apellido}</p>}</div>
        <div className="mt-5 d-flex justify-content-center">
          <CustomButton
            type="success"
          >
            Registrarse
          </CustomButton>
        </div>
      </Form>

      <div>{error.api && <p>{error.api}</p>}</div>
    </div>
  );
};
