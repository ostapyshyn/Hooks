import React, { useContext } from 'react';
import { ListContext } from '../ListContext';

export const ListName = () => {
  const { list } = useContext(ListContext);
  return <h2>🛒 {list}</h2>;
};
