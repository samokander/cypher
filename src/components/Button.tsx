import { useState } from "react";

export default function Button() {
	const [pressed, setPressed] = useState(false);

	const defaultStyle = "bg-lightgray border-t-slightgray border-l-slightgray border-b-darkgray border-r-darkgray";
	const pressedStyle = "bg-gray border-b-slightgray border-r-slightgray border-t-darkgray border-l-darkgray";

	return (
		<span
			className={`border-[2px] ${pressed ? "border-b-white border-r-white" : "border-t-white border-l-white"}`}
			onMouseDown={() => setPressed(true)}
			onMouseUp={() => setPressed(false)}>
			<div className={`w-40 h-10 border-[3px] ${pressed ? pressedStyle : defaultStyle}`}></div>
		</span>
	);
}
