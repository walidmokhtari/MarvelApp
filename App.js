import React from 'react';
import Routes from './src/configs/routes';
import { AuthContextProvider } from './src/configs/context';

function App(props) {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
}

export default App;