// App.js
import React, { useState } from 'react';
import BillForm from './components/BillForm';
import BillItems from './components/BillItems';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div className="App">
      <h1>Billing App</h1>
      <BillForm addItem={addItem} />
      <BillItems items={items} />
    </div>
  );
}

export default App;
