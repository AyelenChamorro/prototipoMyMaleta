
import {AppRoutes} from './AppRoutes/AppRoutes'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss'

function App() {
  return (
    <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
  );
}

export default App;
