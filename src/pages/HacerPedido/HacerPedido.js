import React from "react";
import { Header } from "../../componentes/Header/Header";
import { ProgressBar } from "../../componentes/ProgressBar/ProgressBar";
import { DetalleProducto } from "../../componentes/DetalleProducto/DetalleProducto";
import useHacerPedido from "./useHacerPedido";
import { itemComprar } from "../../componentes/CardsComprar/CardsComprar";
import { useParams } from "react-router-dom";
export const HacerPedido = () => {

  const {
    currentActive,
    circles,
    renderCircles,
    handleNextClick,
    handlePrevClick,
  } = useHacerPedido();

  const { codigo } = useParams();
  const id = itemComprar?.find(
    (selectedId) => parseInt(selectedId?.codigo) === parseInt(codigo)
  );
  if (!id) {
    return <h1>No existe el producto</h1>;
  }
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <ProgressBar
          currentActive={currentActive}
          circles={circles}
          renderCircles={renderCircles}
        />
      </div>
      <div>
        <DetalleProducto
          item={id}
          currentActive={currentActive}
          handleNextClick={handleNextClick}
          handlePrevClick={handlePrevClick}
        />
      </div>
    </div>
  );
};
