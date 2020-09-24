import React from 'react';
import "../styles/AppContainer.css";

const AppContainer = ({children}) => {
  return (
    <div className="AppContainer">
    	{ children }
    </div>
  )
}

export default AppContainer;