import React, { createContext, useContext, useReducer } from 'react';
import {Reducer,initialState} from './Reducer';


const UserContext = createContext();

export const useUserContext = () => useContext(UserContext); 

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer,initialState); 

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
