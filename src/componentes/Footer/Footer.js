import React, { useState } from "react";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../imagenes/logo.png";
import "./Footer.scss";

export const Footer = () => {
  const [selectedOption, setSelectedOption] = useState("Idioma");

  return (
    <div className="row bg-footer">
      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4">
        <Link to={"/"}>
          <div className="d-flex logo-mi-maleta">
            <img src={logo} alt="logo" />
            <h4 className="mt-5 ms-3 mi-maleta-home">miMaleta</h4>
          </div>
        </Link>
      </div>
      <div className="footer-items col-lg-4 col-xl-4 col-md-4 col-sm-4">
        <h2>Sobre nosotros</h2>
        <h2>Como funciona miMaleta</h2>
        <h2>Confianza y seguridad</h2>
      </div>
      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4">
        <DropdownButton
          onSelect={(eventKey) => setSelectedOption(eventKey)}
          title={selectedOption}
          className="boton-idioma"
        >
          <Dropdown.Item eventKey="Español">Español</Dropdown.Item>
          <Dropdown.Item eventKey="English">English</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};
