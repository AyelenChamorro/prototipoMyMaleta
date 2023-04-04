import React from "react";
import logo from "../../imagenes/logo.png";
import "./Header.scss";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const Header = (/* {nombre} */) => {
  const token = localStorage.getItem("token");
 

  return (
    <div className="header row">
      <div className="container">
        {/*   <h1>
          {nombre}
        </h1> */}
        <div className="d-flex justify-content-between">
          <Link to={"/"}>
            <div className="d-flex logo-img-mi-maleta ">
              <img src={logo} alt="logo" />
              <h4 className="mt-5 ms-3 mi-maleta-home">miMaleta</h4>
            </div>
          </Link>

          <div className="d-flex justify-content-center">
            <h4 className="mt-5 comprar ">Comprar</h4>
            <h4 className="mt-5 ms-5 viajar">Viajar</h4>
          </div>
          <div>
            {token ? (
              <Link
                to={"/"}
                onClick={() => localStorage.removeItem("token")}
              >
                <Button className="boton-light" variant="outline-light">
                  Cerrar Sesion
                </Button>{" "}
              </Link>
            ) : (
              <Link to={"/Login"}>
                <Button className="boton-light" variant="outline-light">
                  Iniciar Sesión
                </Button>{" "}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
