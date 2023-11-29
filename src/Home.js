import React from 'react';
import ItemsList from './ItemsList';
import ItemForm from './ItemForm';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeCheckedItems, removeAllItems } from './store/itemsSlice';

const Home = () => {
  const dispatch = useDispatch();

  return (
    <>
      <ItemForm />
      <div className="d-flex text-center justify-content-end my-2">
        <Button
          size="sm"
          className="mx-1 px-3"
          variant="warning"
          onClick={() => dispatch(removeCheckedItems())}
        >
          Clear checked
        </Button>
        <Button
          size="sm"
          className="mx-1 px-3"
          variant="danger"
          onClick={() => dispatch(removeAllItems())}
        >
          Clear all
        </Button>
      </div>
      <ItemsList count={3} />
    </>
  );
};

export default Home;
