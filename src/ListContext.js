import { useState, createContext, useMemo } from 'react';

const ListContext = createContext();

const ListProvider = (props) => {
  const [list, setList] = useState('');

  const value = useMemo(() => ({ list, setList }), [list]);

  return <ListContext.Provider value={value}>{props.children}</ListContext.Provider>;
};
export { ListContext, ListProvider };
