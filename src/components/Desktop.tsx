import Label from "./Label";
import decoder from "../icons/decoder_icon.png";
import notepad from "../icons/notepad_icon.png";
import Modal from "./Modal";

import { useState } from "react";
import Decoder from "./Decoder";

export default function Desktop() {
	const [showNotepad, setShowNotepad] = useState(false);
	const [showDecoder, setShowDecoder] = useState(false);

	return (
		<main className="w-full h-full flex flex-col p-6 justify-start items-start gap-5 relative">
			<Label icon={decoder} name="Decoder" open={setShowDecoder} />
			<Label icon={notepad} name="Notepad" open={setShowNotepad} />

			<Modal showModal={showNotepad} setShowModal={setShowDecoder} name="Decoder" icon={decoder}>
				<Decoder />
			</Modal>
		</main>
	);
}
