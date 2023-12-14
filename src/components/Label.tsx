interface LabelProps {
	icon: string;
	name: string;
	open: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Label(props: LabelProps) {
	return (
		<span
			className="flex flex-col gap-1 items-center p-4 pb-2 hover:bg-almostwhite rounded-md hover:bg-opacity-20 w-32 h-32 justify-center"
			onDoubleClick={() => props.open(true)}>
			<img src={props.icon} className="w-32" />
			<p className="font-fixedsys text-white text-xl">{props.name}</p>
		</span>
	);
}
