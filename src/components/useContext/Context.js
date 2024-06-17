import React, { createContext, useContext, useReducer } from 'react';
import { reducer, initialState } from './Reducer'; // Your existing reducer and initial state

const UserContext = createContext(); // Create context object

export const useUserContext = () => useContext(UserContext); // Custom hook to use context

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState); // Use reducer with initial state

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { UserProvider } from './UserContext'; // Import your UserProvider

// ReactDOM.render(
//   <React.StrictMode>
//     <UserProvider>
//       <App />
//     </UserProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );