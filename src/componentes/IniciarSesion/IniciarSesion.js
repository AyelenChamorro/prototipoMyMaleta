import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import CustomButton from "../BotonPersonalizado/BotonPersonalizado";
import { Link } from "react-router-dom";
import "./IniciarSesion.scss";

export const IniciarSesion = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    api: "",
  });
 /*  const [apiResponse, setApiResponse] = useState(null); */
const crearToken = () =>{
  localStorage.setItem("token", "Tiene Token");
  
}
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
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
    try {
      const res = await axios.post("http://localhost:9000/api/auth/signin", {
        email: formData.email,
        password: formData.password,
      }); // registro de usuario
  
    /*   setApiResponse(res.data); */
    } catch (error) {
      console.error(error);
     /*  setApiResponse(null); */
      setError({
        ...error,
        api: error.response.data.msg,
      });
    }
  };

  return (
    <div className="bg-iniciar-sesion">
      <div className="text-center iniciar-sesion ">
        <h3 className="pt-4">Iniciar Sesion</h3>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupEmailLogin">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            placeholder="EMAIL"
            onChange={handleChange}
          />
          <div>{error.email && <p>{error.email}</p>}</div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPasswordLogin">
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
        <div className="mt-5 d-flex justify-content-center">
          <Link to={"/Comprar"} onClick={crearToken}>
            <CustomButton type="success">Iniciar sesion</CustomButton>
          </Link>
        </div>
      </Form>
    </div>
  );
};
