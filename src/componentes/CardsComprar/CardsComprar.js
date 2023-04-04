import React from "react";
import tablet from "../../imagenes/apple-tablet.png";
import laptop from "../../imagenes/mac-laptop.png";
import nintendo from "../../imagenes/nintendo-consola.png";
import auricular from "../../imagenes/sony-auricular.png";
import play5 from "../../imagenes/ps5.png";
import reloj from "../../imagenes/apple-reloj.png";
import "./CardsComprar.scss";
import { Link } from "react-router-dom";
export const itemComprar = [
  {
    imagenItem: tablet,
    marca: "Apple",
    descripcion:
      "12.9-Inch iPad Pro (4th Generation) with Wi-Fi - 1TB - Space Gray",
    codigo: 50,
    precio: "1399,99 US$",
  },
  {
    imagenItem: laptop,
    marca: "Apple",
    descripcion:
      "MacBook Air 13.3 Laptop - 8GB Memory - 512GB SSD (Latest Model) - Silver",
    codigo: 51,
    precio: "1199,99 US$",
  },
  {
    imagenItem: nintendo,
    marca: "Switch",
    descripcion: "Nintendo - 32GB Console - Gray Joy-Con",
    codigo: 52,
    precio: "299,99 US$",
  },
  {
    imagenItem: auricular,
    marca: "Sony",
    descripcion:
      "WH-1000XM4 Wireless Noise-Cancelling Over-the-Ear Headphones - Black",
    codigo: 53,
    precio: "349,99 US$",
  },
  {
    imagenItem: play5,
    marca: "Sony",
    descripcion: "PlayStation 5 Console",
    codigo: 54,
    precio: "499,99 US$",
  },
  {
    imagenItem: reloj,
    marca: "Apple",
    descripcion:
      "Watch Series 6 (GPS + Cellular) 44mm Blue Aluminum Case with Deep Navy Sport Band - Blue",
    codigo: 55,
    precio: "529,99 US$",
  },
];
export const CardsComprar = () => {
  return (
    <div className="body-cards-compra d-flex justify-content-evenly ">
      {itemComprar.map((item, key) => {
        return (
          <div className="container-card-compra mt-5 mx-3" key={key}>
            <div className="bg-imagen d-flex justify-content-center align-items-center">
              <Link to={`/HacerPedido/${item.codigo}`}>
                <div className="container-imagen ">
                  <img className="img-top" src={item.imagenItem} alt="reloj" />
                </div>
              </Link>
            </div>
            <div className="bg-white ">
              <div className="mx-3 pt-3">
                <h5>{item.marca}</h5>
              </div>
              <div className="mx-3">
                <p>{item.descripcion}</p>
              </div>
              <div className="mx-3">
                <p>Codigo Producto: {item.codigo}</p>
              </div>
              <div className="mx-3">
                <p>Precio en tienda: {item.precio}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
