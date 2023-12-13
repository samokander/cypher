import { useState } from "react";

interface ButtonProps {
	content: string;
	icon: string;
}

export default function Button(props: ButtonProps) {
	const [pressed, setPressed] = useState(false);

	const defaultStyle = "bg-lightgray border-t-slightgray border-l-slightgray border-b-darkgray border-r-darkgray";
	const pressedStyle = "bg-gray border-b-slightgray border-r-slightgray border-t-darkgray border-l-darkgray";

	return (
		<span
			className={`border-[2px] font-fixedsys ${
				pressed ? "border-b-white border-r-white" : "border-t-white border-l-white"
			}`}
			onMouseDown={() => setPressed(true)}
			onMouseUp={() => setPressed(false)}>
			<div
				className={`w-max h-8 border-[3px] select-none  ${
					pressed ? pressedStyle : defaultStyle
				} flex justify-around items-middle px-1 gap-2`}>
				<img src={props.icon} />
				{props.content}
			</div>
		</span>
	);
}
