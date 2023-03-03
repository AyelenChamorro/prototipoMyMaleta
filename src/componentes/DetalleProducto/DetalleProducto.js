import React, { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownButton,
  FloatingLabel,
  Form,
  InputGroup,
  ListGroup,
  Modal,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import CustomButton from "../BotonPersonalizado/BotonPersonalizado";

import "./DetalleProducto.scss";

export const DetalleProducto = ({
  item,
  currentActive,
  handlePrevClick,
  handleNextClick,
}) => {
  const { codigo, descripcion, precio, imagenItem } = item;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(currentActive);
  const renderState = () => {
    switch (currentActive) {
      case 1:
        return (
          <div className="container-detalles-p  mt-5">
            <h3 className=" mx-3 mt-4">1. Detalles del producto</h3>
            <div className="mt-4 mx-3">
              <p>Enlace del producto</p>
              <ListGroup as="ol" numbered>
                <ListGroup.Item as="li">{codigo}</ListGroup.Item>
              </ListGroup>
            </div>
            <div className="mt-4 mx-3">
              <p>Nombre de producto</p>
              <ListGroup as="ol" numbered>
                <ListGroup.Item as="li">{descripcion}</ListGroup.Item>
              </ListGroup>
            </div>
            <div className="imagen-producto mt-3 mx-3">
              <p>Imagen Producto</p>
              <div className="bg-imagen-producto">
                <img src={imagenItem} alt="" />
              </div>
            </div>
            <div className=" mx-3 mt-3">
              <p>Precio del producto</p>
              <ListGroup as="ol" numbered>
                <ListGroup.Item as="li">{precio}</ListGroup.Item>
              </ListGroup>
            </div>
            <div className="mt-4 mx-3">
              <p>Unidades del producto</p>
              <InputGroup className="mb-3 input-grup">
                <DropdownButton
                  variant="outline-secondary"
                  title={"Unidades"}
                  id="input-group-dropdown-1"
                  onSelect={(e) => setUnidades(e)}
                >
                  <Dropdown.Item eventKey={1}>1</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey={2}>2</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey={3}>3</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey={4}>4</Dropdown.Item>
                </DropdownButton>

                <p className="m-2">{unidades}</p>
              </InputGroup>
            </div>
            <div className="mt-4 mx-3">
              <p>Detalle del producto</p>

              <FloatingLabel
                className="label-detalle"
                controlId="floatingTextarea2"
                label="Ingresa los detalles del producto, como talle, color, modelo, etc."
              >
                <Form.Control
                  as="textarea"
                  placeholder=""
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            </div>
            <div className="mx-3">
              <p className="mt-4">Con caja</p>
              <div className="d-flex">
                <div>
                  <p className="detalle-caja me-3">
                    Requerir la caja podría reducir el número de ofertas que
                    recibes. Los viajeros normalmente prefieren entregar pedidos
                    sin caja para ahorrar espacio.
                  </p>
                </div>
                <div className="me-3">
                  <Form>
                    <Form.Check type="switch" id="custom-switch" />
                  </Form>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="container-detalles-case2 mt-5">
            <h3 className="mt-4 mx-3">
              2. Confirmar ciudad y la fecha de entrega
            </h3>
            <div className="mt-3 mx-4">
              <h4>Ruta de entrega</h4>
            </div>
            <div className="mt-4 mx-3">
              <p className="mx-1">Fecha de entrega</p>
              <ListGroup as="ol">
                <ListGroup.Item as="li">fecha de entrega</ListGroup.Item>
              </ListGroup>
            </div>
            <Form className="mt-4 mx-3">
              <Form.Label>Entregar a : </Form.Label>
              <Form.Control type="name" placeholder="Nombre" />
              <p className="mt-2">
                Un viajero de miMaleta yendo hacia tu ciudad entregará el
                pedido. Introduce tu ciudad y cualquier detalle adicional aquí.
              </p>
            </Form>
            <div className="mt-4 mx-3">
              <h4>¿Cuanto tiempo estas dispuesto a esperar?</h4>
              <Form className="mt-3">
                <Form.Control type="name" placeholder="Tiempo de entrega" />
                <p className="mt-2">
                  Cuánto más tiempo esperes más ofertas tendrás para elegir.
                </p>
              </Form>
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <div className="container-detalles-case3 mt-5">
              <div className="d-flex">
                <h3 className="mt-4 mx-5">3. Resumen de la compra</h3>
              </div>

              <div className="d-flex justify-content-evenly mt-4 ">
                <div>
                  <img className="imagen-producto" src={imagenItem} alt="" />
                </div>
                <div>
                  <h3>Nombre del producto</h3>
                </div>
              </div>
              <div className="d-flex justify-content-evenly border-bot mt-4 ms-3">
                <div className="me-5 ms-4">
                  <p>Desde</p>
                  <p>Entregar a</p>
                  <p>Entregar antes del </p>
                </div>
                <div className="me-5 ms-4">
                  <p>Lugar de origen</p>
                  <p>Lugar destino</p>
                  <p>Fecha de entrega</p>
                </div>
              </div>
              <div className="d-flex justify-content-evenly cantidades  mt-4">
                <div className="">
                  <p>Cantidad</p>
                  <p>Tamaño</p>
                  <p>Peso </p>
                  <p>Embalaje</p>
                  <p>Donde comprar</p>
                </div>
                <div className=" ms-5">
                  <p>1</p>
                  <p>1</p>
                  <p>1</p>
                  <p>1</p>
                  <p>1</p>
                </div>
              </div>
            </div>
            <div className="bg-precios ">
              <div className="d-flex justify-content-evenly bg-border-bot mt-4">
                <div className="mt-5">
                  <p>Precio del producto</p>
                  <p>Impuestos de EE.UU</p>
                  <p>Recompensa viajero </p>
                  <p>Tasa de miMaleta</p>
                </div>
                <div className="mt-5 ms-5">
                  <p>{precio}</p>
                  <p>529,00 US$</p>
                  <p>529,00 US$</p>
                  <p>529,00 US$</p>
                </div>
              </div>
              <div className="d-flex justify-content-evenly  mt-5">
                <div className="">
                  <p>Total estimado</p>
                </div>
                <div>
                  <p>529,00 US$</p>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <CustomButton variant="primary" type="siguiente" onSearchClick={handleShow}>
                  Comprar
                </CustomButton>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Compra enviada</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Su compra se realizó con éxito. En breve recibirá un correo
                  </Modal.Body>
                 
                </Modal>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  const [unidades, setUnidades] = useState("");
  return (
    <div className="bg-detalle">
      {renderState()}
      <div className="d-flex  mt-4">
        <CustomButton
          id="prev"
          disabled={currentActive === 1}
          onSearchClick={handleNextClick}
          className="btn "
          type="siguiente"
        >
          Siguiente
        </CustomButton>
      </div>
      <div className="d-flex  mt-5">
        <CustomButton
          type="volver"
          id="prev"
          disabled={currentActive === 1}
          onSearchClick={handlePrevClick}
          className="btn "
        >
          Volver
        </CustomButton>
      </div>
    </div>
  );
};
