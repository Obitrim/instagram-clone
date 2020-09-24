import React, { useContext } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import '../styles/App.css';
import AppHome from "./AppHome";
import AppExplore from "./AppExplore";
import CreatePost from "./CreatePost";
import AppFavorites from "./AppFavorites";
import { StoreContext } from "../store/index";
import AppHeader from "../components/AppHeader";


const ProtectedPages = () => {
	const { store } = useContext(StoreContext);

	return store.token 
		?(
			<>
				<AppHeader/>
				<div className="App__RouterView">
					<Switch>
				      <Route path="/app" exact>
				        <AppHome/> 
				      </Route>
				      <Route path="/app/explore">
				        <AppExplore/>
				      </Route>
				      <Route path="/app/favorites">
				        <AppFavorites/>
				      </Route>
				      <Route path="/app/create">
				        <CreatePost/>
				      </Route>
				    </Switch>
				</div>
			</>
		)
		: <Redirect to="/"/>
}

export default ProtectedPages;