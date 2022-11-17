import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Favoritos from '../pages/Favoritos';


const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/Home' element={ <Home/> } />
            <Route path='/Favoritos' element={ <Favoritos/> } />
        </Routes>
    </BrowserRouter>
);

export default Rotas;