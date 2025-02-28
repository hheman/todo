import React from 'react';
import ItemsList from './ItemsList';
import ItemForm from './ItemForm';
import ItemActions from './ItemActions';

const Home = () => {
  return (
    <>
      <ItemForm />
      <ItemActions />
      <ItemsList count={3} />
    </>
  );
};

export default Home;
