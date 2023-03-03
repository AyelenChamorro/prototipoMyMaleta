import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React from "react";
import { Registrarse } from "../Registrarse/Registrarse";
import { IniciarSesion } from "../IniciarSesion/IniciarSesion";
import "./LoginRegistro.scss";



export const LoginRegistro = () => {
  return (
    <div>
      {" "}
      <Tabs
        defaultActiveKey="iniciar sesion"
        id="fill-tab-example"
        className="mb-3 tab-registro-login"
        fill
      >
       
        <Tab eventKey="iniciar sesion" title="iniciar sesion">
          <IniciarSesion />
        </Tab>
        <Tab eventKey="Registrarse" title="Registrarse" className="tab-registro">
          <Registrarse />
        </Tab>
       
      </Tabs>
    </div>
  );
};
