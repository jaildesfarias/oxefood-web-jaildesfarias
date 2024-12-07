import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';

const CategoriaDropdown = () => {
  const [idCategoria, setIdCategoria] = useState(null);

  // Lista de categorias estática
  const listaCategoria = [
    { key: 1, value: 1, text: 'Categoria A' },
    { key: 2, value: 2, text: 'Categoria B' },
    { key: 3, value: 3, text: 'Categoria C' }
  ];

  const handleSubmit = () => {
    console.log("Categoria selecionada:", idCategoria);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Select
        required
        fluid
        tabIndex="3"
        placeholder="Selecione"
        label="Categoria"
        options={listaCategoria}
        value={idCategoria}
        onChange={(e, { value }) => setIdCategoria(value)}
      />
      <Form.Button type="submit">Salvar</Form.Button>
    </Form>
  );
};

export default CategoriaDropdown;

