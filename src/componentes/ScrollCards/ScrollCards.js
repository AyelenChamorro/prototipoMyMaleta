import React from "react";
import reloj from "../../imagenes/reloj-cards.png";
import mouse from "../../imagenes/mouse-cards.png";
import auricular from "../../imagenes/auricular-cards.png";
import bandera1 from "../../imagenes/bandera-cards-1.png";
import bandera2 from "../../imagenes/bandera-cards-2.png";
import bandera3 from "../../imagenes/bandera-cards-3.png";
import bandera4 from "../../imagenes/bandera-cards-4.png";
import bandera5 from "../../imagenes/bandera-cards-5.png";
import bandera6 from "../../imagenes/bandera-cards-6.png";
import icono from "../../imagenes/icono-cards.png";
import "./ScrollCards.scss";

export const ScrollCards = () => {
  const itemVenta = [
    {
      imagenItem: reloj,
      bandera: bandera1,
      icon: icono,
      bandera2: bandera2,
      ganado: "Ganado  $30",
      ahorrado: "Ahorrado  $40",
    },
    {
      imagenItem: mouse,
      bandera: bandera3,
      icon: icono,
      bandera2: bandera4,
      ganado: "Ganado  $30",
      ahorrado: "Ahorrado  $40",
    },
    {
      imagenItem: auricular,
      bandera: bandera5,
      icon: icono,
      bandera2: bandera6,
      ganado: "Ganado  $30",
      ahorrado: "Ahorrado  $40",
    },
  ];
  return (
    <div className="body-cards d-flex justify-content-evenly ">
      {itemVenta.map((item, key) => {
        return (
          <div className="container-cards mt-5" key={key}>
            <div className="bg-imagen d-flex justify-content-center align-items-center">
              <div className="container-imagen ">
                <img className="img-top" src={item.imagenItem} alt="reloj" />
              </div>
            </div>
            <div className="bg-white container-banderas">
              <div className="d-flex justify-content-center align-items-center ">
                <img
                  className="img-banderas"
                  src={item.bandera}
                  alt="bandera"
                />
                <img className="icono-mensaje" src={item.icon} alt="icon" />
                <img
                  className="img-banderas"
                  src={item.bandera2}
                  alt="bandera2"
                />
              </div>
              <div className="d-flex justify-content-evenly">
                <div className="ganado">
                  <p>{item.ganado}</p>
                </div>
                <div className="ganado">
                  <p>{item.ahorrado} </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
