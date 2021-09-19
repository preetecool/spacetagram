import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Feed from "./components/Feed";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/space">
					<Feed />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
