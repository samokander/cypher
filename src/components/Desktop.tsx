import Label from "./Label";
import decoder from "../icons/decoder_icon.png";
import notepad from "../icons/notepad_icon.png";
import Modal from "./Modal";

import { useState } from "react";

export default function Desktop() {
	const [showModal, setShowModal] = useState(false);

	return (
		<main className="w-full h-full flex flex-col p-6 justify-start items-start gap-5 relative">
			<Label icon={decoder} name="Decoder" />
			<Label icon={notepad} name="Notepad" />

			<button
				className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
				type="button"
				style={{ transition: "all .15s ease" }}
				onClick={() => setShowModal(true)}>
				Open Modal
			</button>

			<Modal showModal={showModal} setShowModal={setShowModal}>
				<p>Put your content here</p>
				{/* Другой контент */}
			</Modal>
		</main>
	);
}
