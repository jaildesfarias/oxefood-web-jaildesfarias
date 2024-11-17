import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import FormEntregador from './views/entregador/FormEntregador';
import Home from './views/home/Home';
import FormProduto from './views/produto/FormProduto';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="form-entregador" element={ <FormEntregador/> } />

               <Route path="form-List-cliente" element={ <FormCliente/>} />
               <Route pasth="form-List-produto" element={ <FormProduto/>} />
              <Route pasth="form-List-entregador" element={ <FormEntregador/>} />
                
                   </Route>
                
                
            </Routes>
        </>
    )
}

export default Rotas
