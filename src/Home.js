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
          style={{
            backgroundColor: '#ffda6a',
            border: '#fff3cd',
            color: '#664d03',
          }}
          onClick={() => dispatch(removeCheckedItems())}
        >
          Clear checked
        </Button>
        <Button
          size="sm"
          className="mx-1 px-3"
          style={{
            backgroundColor: '#ea868f',
            border: '#ea868f',
            color: '#58151c',
          }}
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
