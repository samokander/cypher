export default function Decoder() {
	return (
		<div className="w-full flex justify-center">
			<div className="flex flex-row flex-wrap gap-32 justify-center items-center w-full">
				<div>
					<label className="font-fixedsys font-medium">Input</label>
					<textarea className="flex w-[300px] overflow-scroll p-2 resize-none h-[350px] border-b-white border-r-white bg-almostwhite border-l-gray border-t-gray border-4 justify-start items-start outline-none overflow-x-hidden" />
				</div>
				<div>
					<label className="font-fixedsys font-medium">Decoding</label>
					<textarea className="flex w-[300px] overflow-scroll p-2 resize-none h-[350px] border-b-white border-r-white bg-almostwhite border-l-gray border-t-gray border-4 justify-start items-start outline-none overflow-x-hidden" />
				</div>
			</div>
		</div>
	);
}
