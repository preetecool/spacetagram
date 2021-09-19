import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Feed from "./components/Feed";
import Home from "./components/Home";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/space">
					<Feed />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
