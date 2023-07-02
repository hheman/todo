import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
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
      <Form.Group className="mb-3">
        <Form.Label>Add an item</Form.Label>
        <Form.Control
          type="text"
          placeholder="I want to ..."
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
}

export default ItemForm;
