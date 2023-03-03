import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Login } from '../pages/Login/Login';
import { HacerCompra } from '../pages/HacerCompra/HacerCompra';
import { HacerPedido } from '../pages/HacerPedido/HacerPedido';


export const AppRoutes = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Comprar" element={<HacerCompra />}></Route>
      <Route path="/HacerPedido/:codigo" element={<HacerPedido />}></Route>
    </Routes>
  );
};
