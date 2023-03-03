import React from "react";
import { BuscadorCodigos } from "../../componentes/BuscadorCodigos/BuscadorCodigos";
import { CardsComprar } from "../../componentes/CardsComprar/CardsComprar";
import { Header } from "../../componentes/Header/Header";
import { PagosSeguros } from "../../componentes/PagosSeguros/PagosSeguros";
import { itemComprar } from "../../componentes/CardsComprar/CardsComprar";

export const HacerCompra = () => {
  return (
    <div>
      <div>
        <Header />
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
    </div>
  );
};
