import Label from "./Label";
import decoder from "../icons/decoder_icon.png";
import notepad from "../icons/notepad_icon.png";

export default function Desktop() {
	return (
		<main className="w-full h-full flex flex-col p-6 justify-start items-start gap-5">
			<Label icon={decoder} name="Decoder" />
			<Label icon={notepad} name="Notepad" />
		</main>
	);
}
