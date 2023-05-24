import React, { createContext } from 'react';
import App from './_app';
import Store from '../store/store';



interface State {
  store: Store;
}
export const store = new Store();

export const Context = createContext<State>({
  store,
});

export default function Home() {
  return (
    <Context.Provider value={{store}}>  
        <App />
    </Context.Provider> 
)};

