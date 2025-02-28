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
import { Item } from './Item';

const ItemsList = ({ count }) => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.items.items);
  const sensors = useSensors(
    useSensor(PointerSensor),
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
          <ListGroup>
            {items.map((item) => (
              <Item key={item.id} {...item} />
            ))}
          </ListGroup>
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
