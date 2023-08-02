import React from 'react';
import ItemsList from './ItemsList';
import ItemForm from './ItemForm';

const Home = () => {
  return (
    <>
      <ItemForm />
      <ItemsList count={3} />
    </>
  );
};

export default Home;
