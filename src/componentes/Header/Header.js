import React from "react";
import logo from "../../imagenes/logo.png";
import "./Header.scss";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const Header = () => {
  return (
    <div className="header row">
      <div className="container">
        <div className="d-flex justify-content-between">
          <Link to={"/"}>
            <div className="d-flex">
              <img src={logo} alt="logo" />
              <h4 className="mt-5 ms-3 mi-maleta-home">miMaleta</h4>
            </div>
          </Link>

          <div className="d-flex justify-content-center">
            <h4 className="mt-5 ">Comprar</h4>
            <h4 className="mt-5 ms-5 ">Viajar</h4>
          </div>
          <div>
            <Link to={"/Login"}>
              <Button className="boton-light" variant="outline-light">
                Iniciar Sesión
              </Button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
