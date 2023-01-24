import React from 'react';
import ReactDOM from 'react-dom/client';
import { SearchContextProvider } from './context/SearchContext';
//import { SearchContextProvider } from './context/SearchContext';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
