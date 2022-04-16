import React, { useContext } from 'react';
import { ListContext } from '../ListContext';

const List = ({ list }) => {
  const { setList } = useContext(ListContext);
  setList('Grocery List');

  return (
    <>
      {list.map((item) => {
        const { id, name, count, image } = item;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>Count: {count}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
