import React, { useState, useEffect, useRef, useCallback, useReducer } from 'react';

import data from './data';
import List from './components/List';
import { NumOfItems } from './components/NumOfItems';
import { ListProvider } from './ListContext';
import { ListName } from './components/ListName';

const initialState = { isShow: false };

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'show':
      return { isShow: true };
    case 'hide':
      return { isShow: false };
    default:
      throw new Error();
  }
}

function App() {
  const buttonRef = useRef();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [items, setItems] = useState(data);

  useEffect(() => {
    buttonRef.current.focus();
    document.title = `You have ${items.length} items`;
  });

  const getListLength = useCallback(() => {
    return items.length;
  }, [items]);

  function handleClearButton() {
    setItems([]);
    dispatch({ type: 'show' });
  }

  function handleShowButton() {
    setItems(data);
    dispatch({ type: 'hide' });
  }

  return (
    <ListProvider>
      <main>
        <section className='container'>
          <ListName />
          <NumOfItems items={getListLength} />
          <List list={items} />
          {state.isShow && (
            <button className='focus' onClick={handleShowButton}>
              show list
            </button>
          )}
          <button style={{ display: items.length > 0 ? 'block' : 'none' }} ref={buttonRef} className='focus' onClick={handleClearButton}>
            clear all
          </button>
        </section>
      </main>
    </ListProvider>
  );
}

export default App;
