import React from 'react';
import { Route } from "react-router-dom";

import '../styles/App.css';
import AuthView from "./AuthView";
import ProtectedPages from  "./ProtectedPages";

const App = () => {
  return (
    <>
      <Route path="/">
        <AuthView/>
      </Route>  
      <Route path="/app">
          <ProtectedPages/>
      </Route>
    </>
  );
}

export default App;
