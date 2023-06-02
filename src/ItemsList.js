import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchItems } from './store/itemsSlice';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemsList = ({ count }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);

  useEffect(() => {
    dispatch(fetchItems({ count }));
  }, []);

  return (
    <>
      {items.length ? (
        <ListGroup>
          {items.map((item) => (
            <ListGroup.Item key={item.id}>{item.name}</ListGroup.Item>
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
