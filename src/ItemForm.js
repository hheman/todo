import React from 'react';
import Form from 'react-bootstrap/Form';

function ItemForm() {
  return (
    <Form className="mt-3">
      <Form.Group className="mb-3">
        <Form.Label>Add an item</Form.Label>
        <Form.Control type="text" placeholder="I want to ..." />
      </Form.Group>
    </Form>
  );
}

export default ItemForm;
