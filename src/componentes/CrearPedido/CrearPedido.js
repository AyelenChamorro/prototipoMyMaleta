import React from "react";
import { Link } from "react-router-dom";
import rectangulo1 from "../../imagenes/rectangulo1.png";
import rectangulo2 from "../../imagenes/rectangulo2.png";
import rectangulo3 from "../../imagenes/rectangulo3.png";
import CustomButton from "../BotonPersonalizado/BotonPersonalizado";
import "./CrearPedido.scss";

export const CrearPedido = () => {
  const itemsPedido = [
    {
      numero: 1,
      titulo: "Cuentanos acerca del producto  que deseas",
      descripcion:
        "Crea un pedido del producto que quieras comprar y añade el costo del producto y donde puede comprarlo el viajero",
      imagen: rectangulo1,
    },
    {
      numero: 2,
      titulo: "Espera a la respuesta de viajeros",
      descripcion:
        "Una vez publicado el pedido, espera a las ofertas de vijaeros para entregar los productos, miMaleta calcula automáticamente las tasas e impuestos y la recompensa para el viajero por entregar el articulo.",
      imagen: rectangulo2,
    },
    {
      numero: 3,
      titulo: "Acuerda un punto de reunión para la entrega del producto",
      descripcion:
        "Coordina un punto de entrega con el viajero, si no recibes el producto por cualquier razón, recibiras un reembolso completo. Cuando recibas el producto, confirma la entrega para que el ciajero reciba el pago.",
      imagen: rectangulo3,
    },
  ];
  return (
    <div className="bg-cards-pedido">
      {itemsPedido.map((item) => (
        <div className="d-flex  card-pedido mt-5" key={item.numero}>
          <div className="container">
            <div className="d-flex numero-titulo ">
              <h3 className="mx-5 ">{item.numero}</h3>
              <div className="titulo-card-pedido">
              <h4 className="text-center">{item.titulo}</h4>
              </div>
              
            </div>
            <div className="text-descripcion  ">
              <p className="">{item.descripcion}</p>
            </div>
          </div>
          <div>
            <img src={item.imagen} alt="imagen" />
          </div>
        </div>
      ))}
      <div  className="mt-5 mb-5">
      
        <Link to={"/Login"}>
        <CustomButton
          type="success"
        
         
        >
          Crear Mi Pedido
        </CustomButton>
          </Link>
      </div>
    </div>
  );
};
