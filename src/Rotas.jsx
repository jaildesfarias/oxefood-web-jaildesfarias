import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';

import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';

import FormProduto from './views/produto/FormProduto'; // Corrigido duplicação de importação
import ListProduto from './views/produto/ListProduto'; // Adicionado o import para ListProduto

import Home from './views/home/Home';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="list-cliente" element={ <ListCliente/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />

                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="list-produto" element={ <ListProduto/> } /> {/* Corrigido a rota para ListProduto */}

                <Route path="form-entregador" element={ <FormEntregador/> } />

                <Route path="list-entregador" element={ <ListEntregador/> } />

                {/* Corrigido os erros de digitação nas rotas */}
                <Route path="form-list-cliente" element={ <FormCliente/> } />
                <Route path="form-list-produto" element={ <FormProduto/> } />
                <Route path="form-list-entregador" element={ <FormEntregador/> } />
                
            </Routes>
        </>
    );
}

export default Rotas;
