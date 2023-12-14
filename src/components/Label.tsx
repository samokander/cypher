import Draggable from "react-draggable";

interface LabelProps {
	icon: string;
	name: string;
	open: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Label(props: LabelProps) {
	return (
		<Draggable handle=".handle" grid={[160, 160]} bounds="parent">
			<span
				className="handle flex flex-col gap-1 items-center p-4 pb-2 hover:bg-almostwhite rounded-md hover:bg-opacity-20 w-32 h-32 justify-center z-10"
				onDoubleClick={() => props.open(true)}>
				<img src={props.icon} className="w-32 outline-none select-none" draggable="false" />
				<p className="font-fixedsys text-white text-xl select-none">{props.name}</p>
			</span>
		</Draggable>
	);
}
