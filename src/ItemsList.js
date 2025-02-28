import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, swapItems } from './store/itemsSlice';
import ListGroup from 'react-bootstrap/ListGroup';
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
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Item } from './Item';

class MyPointerSensor extends PointerSensor {
  static activators = [
    {
      eventName: 'onPointerDown',
      handler: ({ nativeEvent: event }) => {
        if (
          !event.isPrimary ||
          event.button !== 0 ||
          isInteractiveElement(event.target)
        ) {
          return false;
        }

        return true;
      },
    },
  ];
}

function isInteractiveElement(element) {
  const interactiveElements = [
    'button',
    'input',
    'textarea',
    'select',
    'option',
    'svg',
  ];

  if (interactiveElements.includes(element.tagName.toLowerCase())) {
    return true;
  }

  return false;
}

const ItemsList = ({ count }) => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.items.items);
  const sensors = useSensors(
    useSensor(MyPointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    dispatch(fetchItems({ count }));
  }, [dispatch, count]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      dispatch(
        swapItems({ movedItem: active.id, movedAfterThisItem: over.id })
      );
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.length ? (
          <div className="d-flex flex-column w-100">
            {items.map((item) => (
              <Item key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <p className="px-3">No items found</p>
        )}
      </SortableContext>
    </DndContext>
  );
};

ItemsList.propTypes = {
  count: PropTypes.number,
};

export default ItemsList;
