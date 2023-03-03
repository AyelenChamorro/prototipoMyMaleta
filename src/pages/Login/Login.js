import React from "react";
import { Header } from "../../componentes/Header/Header";
import { LoginRegistro } from "../../componentes/LoginRegistro/LoginRegistro";

export const Login = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <LoginRegistro />
      </div>
    </div>
  );
};
