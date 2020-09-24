import React, { createContext, useReducer } from 'react';
import reducer from "./reducer";
import initialState from "./state";

export const StoreContext = createContext();

const Index = ({children}) => {
	const  [store, dispatch]  = useReducer(reducer, initialState);

	return (
		<StoreContext.Provider value={{ store, dispatch }}>
			{children}
		</StoreContext.Provider>
	)
}

export default Index;