import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { addItem } from './store/itemsSlice';

function ItemForm() {
  const [itemName, setItemName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName.trim()) {
      dispatch(addItem(itemName));
      setItemName('');
    }
  };

  return (
    <Form className="d-flex mt-3 mb-2 mr-2" onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        placeholder="Start typing..."
        className="flex-grow-1"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <Button
        variant="primary"
        className="px-4 ms-2 flex-shrink-0"
        // style={{ backgroundColor: '#cfe2ff', color: '#007bff' }}
        onClick={handleSubmit}
      >
        Add
      </Button>
    </Form>
  );
}

export default ItemForm;
