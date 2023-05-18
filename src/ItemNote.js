import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItem } from './store/itemsSlice';

const ItemNote = () => {
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.items.selectedItem);

  useEffect(() => {
    dispatch(fetchItem({ itemId }));
  }, [itemId]);

  return <div>{data ? <p>{data.name}</p> : <p>Loading...</p>}</div>;
};

export default ItemNote;
