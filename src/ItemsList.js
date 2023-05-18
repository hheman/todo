import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchItems } from './store/itemsSlice';

const ItemsList = ({ count }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  const handleClick = ({ id }) => {
    navigate(`/items/${id}`);
  };

  useEffect(() => {
    dispatch(fetchItems({ count }));
  }, []);

  return (
    <>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li key={item.id} onClick={() => handleClick(item)}>
              {item.name}
            </li>
          ))}
        </ul>
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
