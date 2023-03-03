import React from "react";
import { Header } from "../../componentes/Header/Header";
import { MiMaleta } from "../../componentes/MiMaleta/MiMaleta";
import {Entregas} from "../../componentes/Entregas/Entregas";
import {ScrollCards} from "../../componentes/ScrollCards/ScrollCards";
import { ComoFuncionaMiMaleta } from "../../componentes/ComoFuncionaMiMaleta/ComoFuncionaMiMaleta";
import { CrearPedido } from "../../componentes/CrearPedido/CrearPedido";
import {Footer} from "../../componentes/Footer/Footer";

export const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <MiMaleta />
      </div>
      <div>
      <Entregas/>
      </div>
      <div>
      <ScrollCards/>
      </div>
      <div>
        <ComoFuncionaMiMaleta />
      </div>
      <div>
        <CrearPedido />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
