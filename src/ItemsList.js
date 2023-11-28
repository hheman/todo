import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, removeItem, updateItemChecked } from './store/itemsSlice';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';
import PropTypes from 'prop-types';

const ItemsList = ({ count }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);

  useEffect(() => {
    dispatch(fetchItems({ count }));
  }, [dispatch, count]);

  const handleChecked = (itemId, checked) => {
    dispatch(updateItemChecked({ id: itemId, checked }));
  };

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
          ))}
        </ListGroup>
      ) : (
        <p className="px-3">No items found</p>
      )}
    </>
  );
};

ItemsList.propTypes = {
  count: PropTypes.number,
};

export default ItemsList;
