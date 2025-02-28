import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeCheckedItems, removeAllItems } from './store/itemsSlice';

const ItemActions = () => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex text-center justify-content-end my-2">
      <Button
        size="sm"
        className="mx-1 px-3"
        variant="warning"
        // style={{
        //   backgroundColor: '#ffda6a',
        //   border: '#fff3cd',
        //   color: '#664d03',
        // }}
        onClick={() => dispatch(removeCheckedItems())}
      >
        Clear checked
      </Button>
      <Button
        size="sm"
        className="mx-1 px-3"
        variant="danger"
        // style={{
        //   backgroundColor: '#ea868f',
        //   border: '#ea868f',
        //   color: '#58151c',
        // }}
        onClick={() => dispatch(removeAllItems())}
      >
        Clear all
      </Button>
    </div>
  );
};

export default ItemActions;
