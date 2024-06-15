import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Table = ({ items, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Código</th>
          <th>Preço</th>
          <th>Data de Fabricação</th>
          <th>Data de Validade</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={item.id}>
            <td>{item.nome}</td>
            <td>{item.codigo}</td>
            <td>R$ {item.preco}</td>
            <td>{new Date(item.dataFabricacao).toLocaleDateString('pt-BR')}</td>
            <td>{new Date(item.dataValidade).toLocaleDateString('pt-BR')}</td>
            <td>
              <button onClick={() => onEdit(index)}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button onClick={() => onDelete(index)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
