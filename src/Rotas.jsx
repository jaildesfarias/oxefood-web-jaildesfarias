import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';

import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';

import FormProduto from  './views/produto/FormProduto'
import FormProduto from './views/produto/FormProduto';

import Home from './views/home/Home';


function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="list-cliente" element={ <ListCliente/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />

                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="list-produto" element={ <ListProduto/> } />

                <Route path="form-entregador" element={ <FormEntregador/> } />
<<<<<<< HEAD
                <Route path="list-entregador" element={ <ListEntregador/> } />


=======

               <Route path="form-List-cliente" element={ <FormCliente/>} />
               <Route pasth="form-List-produto" element={ <FormProduto/>} />
              <Route pasth="form-List-entregador" element={ <FormEntregador/>} />
                
                
                
>>>>>>> e981c34f7ec6abca683a51ba2c64fca2ab2d1c55
            </Routes>
        </>
    )
}

export default Rotas
