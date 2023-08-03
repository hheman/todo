import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
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
    <Form className="mt-3" onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Start typing..."
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <Button
          variant="light"
          className="px-4"
          style={{ backgroundColor: '#cfe2ff', color: '#007bff' }}
          onClick={handleSubmit}
        >
          Add
        </Button>
      </InputGroup>
    </Form>
  );
}

export default ItemForm;
