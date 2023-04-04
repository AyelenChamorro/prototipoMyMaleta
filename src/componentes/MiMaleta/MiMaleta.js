import React from "react";
import maleta from "../../imagenes/mi-maleta.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import "./MiMaleta.scss";

export const MiMaleta = () => {
  return (
    <div className="row mimaleta">
      <div className="d-flex justify-content-evenly ">
        <div className="descripcion-mi-maleta">
          <h2 className="text-center">
            Compra tus productos preferidos <br /> desde cualquier parte del
            mundo <br /> y recibelo de la maleta de otros <br /> viajeros.
          </h2>
          <div className="d-flex">
            <FontAwesomeIcon
              className=" icono-flecha"
              icon={faArrowAltCircleRight}
            />
            <p className="ms-2 mt-5">Como funciona miMaleta</p>
          </div>
        </div>
        <div>
          <img src={maleta} alt="maleta" />
        </div>
      </div>
    </div>
  );
};
