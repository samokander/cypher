import React from "react";
import logo from "./icons/logo.png";
import Taskbar from "./components/Taskbar";
import Desktop from "./components/Desktop";

function App() {
	return (
		<div className="h-screen relative">
			<img src={logo} className="opacity-10 absolute -z-10 right-1/3 top-[20%]" />
			<Desktop />
			<Taskbar />
		</div>
	);
}

export default App;
