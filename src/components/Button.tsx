import { ReactNode, useState } from "react";

interface ButtonProps {
	content?: ReactNode;
	click?: () => void;
	icon?: string;
}

export default function Button(props: ButtonProps) {
	const [pressed, setPressed] = useState(false);

	const defaultStyle = "bg-lightgray border-t-slightgray border-l-slightgray border-b-darkgray border-r-darkgray";
	const pressedStyle = "bg-gray border-b-slightgray border-r-slightgray border-t-darkgray border-l-darkgray";

	return (
		<span
			className={`border-[2px] font-fixedsys cursor-pointer ${
				pressed ? "border-b-white border-r-white" : "border-t-white border-l-white"
			}`}
			onMouseDown={() => setPressed(true)}
			onMouseUp={() => setPressed(false)}
			onClick={props.click}>
			<div
				className={`border-[3px] select-none font-normal  ${
					pressed ? pressedStyle : defaultStyle
				} flex justify-around items-center px-1 gap-2 h-full`}>
				{props.icon ? <img src={props.icon} className="h-4 aspect-square" /> : ""}
				{props.content}
			</div>
		</span>
	);
}
