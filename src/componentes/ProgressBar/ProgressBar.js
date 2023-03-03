import { useState } from "react";
import "./ProgressBar.scss";

export const ProgressBar = ({
  currentActive,
  circles,
  renderCircles
}) => {


  return (
    <div className="bg-color">
      <div className="container d-flex ">
        <div className="container-progress mt-5" id="progress">
          <div
            className="progress"
            id="progress"
            style={{
              width: `${((currentActive - 1) / (circles.length - 1)) * 100}%`,
            }}
          ></div>

          {/*  <div className="circle ">1</div>
          <div className="circle ">2</div>
          <div className="circle">3</div> */}

          {renderCircles()}
        </div>
       <div className="container contenedor-progress-detalle">
       <div className="row">
          <div className="col-4 ">
            <p>Detalle  producto</p>
          </div>
          <div className="col-4">
            <p>Detalles entrega</p>
          </div>
          <div className="col-4 ">
            <p>Resumen</p>
          </div>
        </div>
       </div>
    
      </div>
    </div>
  );
};
