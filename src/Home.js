import React from 'react';
import ItemsList from './ItemsList';
import ItemForm from './ItemForm';

const Home = () => {
  return (
    <>
      <h1>This is your to-do app.</h1>
      <ItemForm />
      <ItemsList count={3} />
    </>
  );
};

export default Home;
