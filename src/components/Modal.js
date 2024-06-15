import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, onSave, currentItem }) => {
  const [item, setItem] = useState({
    nome: '',
    codigo: '',
    preco: '',
    dataFabricacao: '',
    dataValidade: ''
  });

  useEffect(() => {
    if (currentItem) {
      setItem(currentItem);
    }
  }, [currentItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(item);
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" name="nome" value={item.nome} onChange={handleChange} required />
          </label>
          <label>
            Código:
            <input type="text" name="codigo" value={item.codigo} onChange={handleChange} required />
          </label>
          <label>
            Preço:
            <input type="number" name="preco" value={item.preco} onChange={handleChange} required />
          </label>
          <label>
            Data de Fabricação:
            <input type="date" name="dataFabricacao" value={item.dataFabricacao ? item.dataFabricacao.split('T')[0] : ''} onChange={handleChange} required />
          </label>
          <label>
            Data de Validade:
            <input type="date" name="dataValidade" value={item.dataValidade ? item.dataValidade.split('T')[0] : ''} onChange={handleChange} required />
          </label>
          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
