import React from 'react';

import ExpenseDetails from './components/Expenses/ExpenseDetails';


const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Food',
      amount: 10,
      date: new Date(2022, 7, 14),
    },
    {
      id: 'e2',
      title: 'Movie',
      amount: 100,
      date: new Date(2022, 2, 12)
    },
    {
      id: 'e3',
      title: 'Drinks',
      amount: 200,
      date: new Date(2023, 2, 28),
    },
    {
      id: 'e4',
      title: 'Fruits',
      amount: 450,
      date: new Date(2023, 4, 12),
    },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseDetails items={expenses} />
    </div>
  );
}

export default App;
