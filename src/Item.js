import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchItems,
  removeItem,
  updateItemChecked,
  swapItems,
} from './store/itemsSlice';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';
import PropTypes from 'prop-types';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  useSortable,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
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
    console.log('init remove', itemId);
    dispatch(removeItem(itemId));
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <ListGroup.Item
        key={item.id}
        className="d-flex justify-content-between align-items-center"
      >
        <div
          className={`d-flex align-items-center ${item.checked ? 'opacity-50' : ''}`}
        >
          <Form.Check type="checkbox">
            <Form.Check.Input
              type="checkbox"
              className="border-2 shadow-none"
              style={{
                borderColor: item.checked
                  ? 'var(--bs-primary)'
                  : 'var(--bs-gray-500)',
              }}
              checked={item.checked}
              onChange={(e) => handleChecked(item.id, e.target.checked)}
            />
            <Form.Check.Label
              className={`${item.checked ? 'text-decoration-line-through' : ''}`}
            >
              {item.name}
            </Form.Check.Label>
          </Form.Check>
        </div>
        <CloseButton
          size="sm"
          className="ml-auto"
          onClick={() => handleRemove(item.id)}
        />
      </ListGroup.Item>
    </div>
  );
};
