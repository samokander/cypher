import React, { useRef } from "react";
import { ModalProps } from "../types"; // Импортируем интерфейс
import Draggable from "react-draggable";
import Button from "./Button";

const Modal: React.FC<ModalProps> = ({ showModal, setShowModal, children, name, icon }) => {
	const nodeRef = useRef(null);
	return (
		<>
			{showModal ? (
				<Draggable handle=".cursor-drag" bounds="parent" nodeRef={nodeRef}>
					{/* Content */}
					<div
						ref={nodeRef}
						className=".resize-drag w-[70%] absolute z-50 aspect-[16/8] bg-almostwhite border-b-black border-r-black border-r-8 border-b-8 pr-0 flex flex-col items-stretch touch-none[] box-border">
						{/* Header */}
						<div className="h-14 bg-blue border-t-purple border-l-purple border-8 border-b-deepblue border-r-deepblue p-2 flex justify-between gap-3 items-center pl-5 cursor-drag">
							<div className="flex flex-row gap-3">
								<img src={icon} className="w-5 h-5" />
								<p className="font-fixedsys text-white">{name}</p>
							</div>
							<Button
								content={<p className="text-lg font-bold w-full text-center leading-none">×</p>}
								click={() => setShowModal(false)}
							/>
						</div>
						<div className="bg-almostwhite h-12 border-r-gray border-b-gray border-b-8 border-r-8 outline-offset-1 border-l-almostwhite ml-2 border-l-0 font-fixedsys font-medium text-lg gap-5 flex flex-row items-center pl-6">
							<p className="hover:underline select-none">File</p>
							<p className="hover:underline select-none">Edit</p>
							<p className="hover:underline select-none">Format</p>
							<p className="hover:underline select-none">View</p>
							<p className="hover:underline select-none">Help</p>
						</div>
						{/* Body */}
						<div className="border-black border-[5px] ml-2 flex flex-row h-full justify-end pl-0 border-r-0">
							{children}
							<div className="h-full w-9 flex flex-col border-l-black border-l-[5px] border-r-0">
								<div className="w-full aspect-square bg-almostwhite border-4 border-r-gray border-b-gray border-l-0 border-t-0 outline-black outline-[5px] outline z-10 font-fixedsys text-center">
									▲
								</div>
								<div className="bg-gray border-r-darkgray border-b-darkgray border-4 border-b-8 border-t-0 flex flex-col justify-between h-full border-l-0"></div>
								<div className="w-full aspect-square bg-almostwhite border-4 border-r-gray border-b-gray border-l-0 border-t-0 outline-black outline-[5px] outline z-10 font-fixedsys text-center pt-1">
									▼
								</div>
							</div>
						</div>
						{/* Footer */}
						<div className="flex items-center justify-end h-[32px] p-0">
							<div className="border-l-[5px] border-black w-full h-full ml-2 border-r-[5px] text-start pl-5 font-fixedsys font-medium text-gray py-1">
								© Cypher
							</div>
							<div className="w-[32px] h-full border-4 border-r-gray border-b-gray border-t-0 border-l-0 cursor-drag "></div>
						</div>
					</div>
				</Draggable>
			) : null}
		</>
	);
};

export default Modal;
