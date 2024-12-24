import React from 'react';

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="bg-white p-4 shadow-md rounded-lg my-4">
      <h2 className="text-xl font-bold mb-4 text-slate-700">Expense List</h2>
      <div className="text-lg font-semibold text-gray-800 mb-4">
        Total Expense: Rs. {totalExpense.toFixed(2)}
      </div>
      <ul>
        {expenses.map((expense, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-2 border-b last:border-none"
          >
            <span className="text-gray-800">
              {expense.name} - Rs. {expense.amount.toFixed(2)}
            </span>
            <button
              onClick={() => onDeleteExpense(index)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
