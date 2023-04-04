import React from "react";
import { BuscadorCodigos } from "../../componentes/BuscadorCodigos/BuscadorCodigos";
import { CardsComprar } from "../../componentes/CardsComprar/CardsComprar";
import { Header } from "../../componentes/Header/Header";
import { PagosSeguros } from "../../componentes/PagosSeguros/PagosSeguros";
import { itemComprar } from "../../componentes/CardsComprar/CardsComprar";
import { Footer } from "../../componentes/Footer/Footer";
import { Registrarse } from "../../componentes/Registrarse/Registrarse";
import { useParams } from "react-router-dom";

export const HacerCompra = () => {

  /* const { nombre } = useParams();
  const id = nombre?.find(
    (selectedId) => parseInt(selectedId?.nombre) === parseInt(nombre)
  ); */
  return (
    <div>
      <div>
        <Header /* nombre ={id} */ />
      </div>
      <div>
        <BuscadorCodigos item={itemComprar} />
      </div>
      <div>
        <PagosSeguros />
      </div>
      <div>
        <CardsComprar />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};
