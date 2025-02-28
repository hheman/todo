import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateItemChecked } from './store/itemsSlice';
import Form from 'react-bootstrap/Form';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export const Item = (item) => {
  const dispatch = useDispatch();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleChecked = (itemId, checked) => {
    dispatch(updateItemChecked({ id: itemId, checked }));
  };

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div
        key={item.id}
        className="todo-item-card d-flex justify-content-between align-items-center my-1 px-2 pb-1 pt-2"
      >
        <div className="d-flex align-items-center">
          <Form.Check type="checkbox">
            <Form.Check.Input
              type="checkbox"
              checked={item.checked}
              onChange={(e) => handleChecked(item.id, e.target.checked)}
            />
            <Form.Check.Label
              className={`${item.checked ? 'text-decoration-line-through opacity-50' : ''}`}
            >
              {item.name}
            </Form.Check.Label>
          </Form.Check>
        </div>
        <CloseButton
          className="ml-auto"
          onClick={() => handleRemove(item.id)}
        />
      </div>
    </div>
  );
};

const CloseButton = ({ onClick }) => (
  <button
    className="m-0 p-0 close"
    type="button"
    aria-label="Close"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-x-circle-fill"
      viewBox="0 0 16 16"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
    </svg>
  </button>
);
