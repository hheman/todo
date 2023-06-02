import React from 'react';
import ItemsList from './ItemsList';
import ItemForm from './ItemForm';
import Container from 'react-bootstrap/Container';

const Home = () => {
  return (
    <>
      <Container className="mx-auto w-50">
        <h1>This is your to-do app.</h1>
        <ItemForm />
        <ItemsList count={3} />
      </Container>
    </>
  );
};

export default Home;
