import { PropsWithChildren } from "react";
import Button from "./Button";
import logo from "../icons/black_logo.png";
import dexscreener from "../icons/image 11.png";

export default function Taskbar(props: PropsWithChildren) {
	return (
		<footer className="h-14 w-full bg-lightgray border-t-white border-l-white border-b-darkgray border-r-darkgray border-4 absolute bottom-0 flex flex-row items-center px-2 justify-between">
			<div className="flex flex-row gap-5">
				<Button icon={logo} />
				<Button content="DEXSCREENER" icon={dexscreener} />
			</div>
			<p className="font-fixedsys font-normal text-lg text-gray">CA: 01100101 01110010 01110010 01101111 01110010</p>
		</footer>
	);
}
