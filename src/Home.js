import React from 'react';
import Heading from './Heading';
import ItemsList from './ItemsList';

const Home = () => {
  return (
    <>
      <Heading />
      <p>
        Welcome to React App thats build using Webpack and Babel separately.
      </p>
      <ItemsList count={3} />
    </>
  );
};

export default Home;
