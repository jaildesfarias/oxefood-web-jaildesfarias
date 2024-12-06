import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';

import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';

import FormProduto from  './views/produto/FormProduto'
import FormProduto from './views/produto/FormProduto';

import FormProduto from  './views/venda/FormVenda'
import FormProduto from './views/venda/FormVenda';


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
                <Route path="list-entregador" element={ <ListEntregador/> } />


              <Route pasth="form-venda" element={ <FormVenda/>} />
              <Route path="list-venda" element={ <ListVenda/> } />
                
                

            </Routes>
        </>
    )
}

export default Rotas
