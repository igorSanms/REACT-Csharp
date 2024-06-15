import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import Modal from './components/Modal';
import axios from 'axios';
import './styles/App.css';
import './styles/index.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [isFormOpen, setFormOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get('http://localhost:5071/api/mercadorias');
    setItems(response.data);
  };

  const handleAdd = () => {
    setCurrentItem(null);
    setFormOpen(true);
  };

  const handleEdit = (index) => {
    setCurrentItem(items[index]);
    setFormOpen(true);
  };

  const handleDelete = async (index) => {
    const item = items[index];
    await axios.delete(`http://localhost:5071/api/mercadorias/${item.id}`);
    fetchItems();
  };

  const handleSave = async (item) => {
    if (currentItem) {
      await axios.put(`http://localhost:5071/api/mercadorias/${currentItem.id}`, item);
    } else {
      await axios.post('http://localhost:5071/api/mercadorias', item);
    }
    fetchItems();
    setFormOpen(false);
  };

  const handleCloseForm = () => {
    setFormOpen(false);
  };

  return (
    <div className="container">
      <Header onAdd={handleAdd} />
      <Table items={items} onEdit={handleEdit} onDelete={handleDelete} />
      {isFormOpen && (
        <Modal isOpen={isFormOpen} onClose={handleCloseForm} onSave={handleSave} currentItem={currentItem} />
      )}
    </div>
  );
};

export default App;
