import React from "react";
import candado from "../../imagenes/candado-seguro.png";
import entrega from "../../imagenes/entrega-garantizada.png";
import "./PagosSeguros.scss";

export const PagosSeguros = () => {
  return (
    <div className="d-flex justify-content-evenly bg-pagos-entrega">
      <div className="d-flex candado-pagos">
        <div>
          <img src={candado} alt="" />
        </div>
        <div className="mx-5">
          <h3>Pagos seguros</h3>
          <p>
            Tu pago nunca será <br/> entregado al viajero hasta <br/> que confirmes la
            entrega{" "}
          </p>
        </div>
      </div>
      <div  className="d-flex entrega-garantizada">
        <div>
          <img src={entrega} alt="" />
        </div>
        <div className="mx-5">
          <h3>Entrega garantizada</h3>
          <p>Recibe tu pedido según lo <br/> acordado o recupera el 100% </p>
        </div>
      </div>
    </div>
  );
};
