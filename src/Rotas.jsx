import React from 'react';
import { Route, Routes } from 'react-router-dom';

import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';

import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';

import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';

import FormVenda from './views/venda/FormVenda';
import VendaList from './views/venda/VendaList';

import Home from './views/home/Home';

function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            {/* Cliente Routes */}
            <Route path="list-cliente" element={<ListCliente />} />
            <Route path="form-cliente" element={<FormCliente />} />

            {/* Produto Routes */}
            <Route path="form-produto" element={<FormProduto />} />
            <Route path="list-produto" element={<ListProduto />} />

            {/* Entregador Routes */}
            <Route path="form-entregador" element={<FormEntregador />} />
            <Route path="list-entregador" element={<ListEntregador />} />

            {/* Venda Routes */}
            <Route path="form-venda" element={<FormVenda />} />
            <Route path="list-venda" element={<VendaList />} />
        </Routes>
    );
}

export default Rotas;
