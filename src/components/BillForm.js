// components/BillForm.js
import React, { useState } from 'react';

const BillForm = ({ addItem }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ name, quantity, price });
    setName('');
    setQuantity(1);
    setPrice(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} min="1" required />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} step="0.01" min="0" required />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default BillForm;
