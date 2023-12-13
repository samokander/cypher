import { PropsWithChildren } from "react";
import Button from "./Button";
import dexscreener from "../icons/image 11.png";

export default function Taskbar(props: PropsWithChildren) {
	console.log(dexscreener);
	return (
		<footer className="h-14 w-full bg-lightgray border-t-white border-l-white border-b-darkgray border-r-darkgray border-4 absolute bottom-0 flex flex-row items-center px-2">
			<Button content="DEXSCREENER" icon={dexscreener} />
		</footer>
	);
}
