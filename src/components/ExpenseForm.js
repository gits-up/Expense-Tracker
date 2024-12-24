import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount) {
      onAddExpense({ name, amount: parseFloat(amount) });
      setName('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-lg my-4">
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Expense Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter expense name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-slate-700 text-white py-2 rounded-lg hover:bg-slate-800 transition"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
