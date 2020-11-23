import React from 'react';
import './App.css';
import Expensechild from './expense-child.js';
import {TransactionProvider} from './transContext.js';

function App() {
  return (
    <div className="App">
      <TransactionProvider>
      <Expensechild/>
      </TransactionProvider>
    </div>
  );
}

export default App;
