import { useState } from "react";
import CustomButton from "../BotonPersonalizado/BotonPersonalizado";

import "./BuscadorCodigos.scss";
import { Link } from "react-router-dom";

export const BuscadorCodigos = ({ item }) => {
  const [codigo, setCodigo] = useState("");
  const [itemEncontrado, setItemEncontrdo] = useState(null);

  const handleChange = (e) => {
    setCodigo(e.target.value);
  };
 

  const handleSearch = (e) => {
    e.preventDefault();
    
    const id = item?.find(
      (selectedId) => parseInt(selectedId?.codigo) === parseInt(codigo)
    );
    if (id) {
      setItemEncontrdo({ id });
    } else {
   
      setItemEncontrdo("No existe el producto");
    }
  };

  return (
    <>
      <div className="bg-comprar-productos">
        <div className="text-center ingresa-codigo">
          <h3 className="pt-4">Ingresa el producto a comprar</h3>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <form onSubmit={handleSearch}>
            <input
              className="input-codigos"
              type="number"
              value={codigo.codigo}
              onChange={handleChange}
              placeholder="Ingrese el Codigo del producto"
            />
            <div className="mt-4">
              <CustomButton type="buscar">Buscar</CustomButton>
            </div>
          </form>
        </div>
      </div>
      {itemEncontrado === "No existe el producto" ? (
        <div className="text-center">
          <h1>No existe el producto</h1>
        </div>
      ) : (
        itemEncontrado && (
          <div className="container-card-compra mt-5">
            <div className="bg-imagen d-flex justify-content-center align-items-center">
              <div className="container-imagen ">
                <Link to={`/HacerPedido/${itemEncontrado.id.codigo}`} >
                <img
                  className="img-top"
                  src={itemEncontrado.id.imagenItem}
                  alt="reloj"
                />
                
                </Link>
               
              </div>
            </div>
            <div className="bg-white ">
              <div className="mx-3 pt-3">
                <h5>{itemEncontrado.id.marca}</h5>
              </div>
              <div className="mx-3">
                <p>{itemEncontrado.id.descripcion}</p>
              </div>
              <div className="mx-3">
                <p>Codigo Producto: {itemEncontrado.id.codigo}</p>
              </div>
              <div className="mx-3">
                <p>Precio en tienda: {itemEncontrado.id.precio}</p>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};
