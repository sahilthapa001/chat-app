import React from "react";
import Logout from "./Pages/Logout/Logout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Registration from "./Pages/Registration/Registration";
import Chat from "./Pages/Chat/Chat";
import Login from "./Pages/Login/Login";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />}></Route>
				<Route path="/Logout" element={<Logout />}></Route>
				<Route path="/Dashboard" element={<Dashboard />}></Route>
				<Route path="/Registration" element={<Registration />}></Route>
				<Route path="/Chat" element={<Chat />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
