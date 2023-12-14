import { useState } from "react";

export default function Decoder() {
	const [binaryInput, setBinaryInput] = useState<string>("");
	const [textOutput, setTextOutput] = useState<string>("");

	const handleBinaryInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const value = e.target.value;

		// Проверяем, содержит ли ввод только 0 и 1
		if (value.match(/^[01\s]*$/g)) {
			setBinaryInput(value);
			convertToText(value.replace(/\s+/g, ""));
		}
	};

	const convertToText = (binaryString: string) => {
		let text = "";
		for (let i = 0; i < binaryString.length; i += 8) {
			const byte = binaryString.slice(i, i + 8);
			if (byte.length === 8) {
				text += String.fromCharCode(parseInt(byte, 2));
			}
		}

		setTextOutput(text);
	};
	return (
		<div className="w-full flex justify-center">
			<div className="flex flex-row flex-wrap gap-32 justify-center items-center w-full">
				<div>
					<label className="font-fixedsys font-medium">Input</label>
					<textarea
						className="flex w-[300px] overflow-scroll p-2 resize-none h-[350px] border-b-white border-r-white bg-almostwhite border-l-gray border-t-gray border-4 justify-start items-start outline-none overflow-x-hidden"
						onChange={handleBinaryInputChange}
						value={binaryInput}
					/>
				</div>
				<div>
					<label className="font-fixedsys font-medium">Decoding</label>
					<textarea
						className="flex w-[300px] overflow-scroll p-2 resize-none h-[350px] border-b-white border-r-white bg-almostwhite border-l-gray border-t-gray border-4 justify-start items-start outline-none overflow-x-hidden"
						value={textOutput}
					/>
				</div>
			</div>
		</div>
	);
}
