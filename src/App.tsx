import React from "react";
import logo from "./logo.svg";
import Taskbar from "./components/Taskbar";

function App() {
	return (
		<div className="flex justify-center items-center h-screen relative">
			<Taskbar />
		</div>
	);
}

export default App;
