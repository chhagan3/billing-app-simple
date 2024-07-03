// components/BillItems.js
import React from 'react';

const BillItems = ({ items }) => {
  return (
    <div>
      <h2>Items Added:</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity}, Price: ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BillItems;
