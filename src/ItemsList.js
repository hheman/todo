import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, removeItem } from './store/itemsSlice';
import { ListGroup, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ItemsList = ({ count }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);

  useEffect(() => {
    dispatch(fetchItems({ count }));
  }, [dispatch, count]);

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <>
      {items.length ? (
        <ListGroup>
          {items.map((item) => (
            <ListGroup.Item
              key={item.id}
              className="d-flex justify-content-between align-items-center"
            >
              <span>{item.name}</span>
              <Button
                size="sm"
                className="ml-auto"
                onClick={() => handleRemove(item.id)}
              >
                remove
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p>No items found</p>
      )}
    </>
  );
};

ItemsList.propTypes = {
  count: PropTypes.number,
};

export default ItemsList;
