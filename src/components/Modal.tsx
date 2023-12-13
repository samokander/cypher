import React from "react";
import { ModalProps } from "../types"; // Импортируем интерфейс
import Draggable from "react-draggable";

const Modal: React.FC<ModalProps> = ({ showModal, setShowModal, children, name, icon }) => {
	return (
		<>
			{showModal ? (
				<Draggable handle=".cursor-drag">
					<div className="fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="absolute my-6 mx-auto w-full top-0 left-0">
							{/* Content */}
							<div className="w-[70%] aspect-[16/8] bg-almostwhite border-b-black border-r-black border-r-8 border-b-8 pr-0">
								{/* Header */}
								<div className="h-14 bg-blue border-t-purple border-l-purple border-8 border-b-deepblue border-r-deepblue p-1 flex justify-between gap-3 items-center pl-5 cursor-drag">
									<img src={icon} className="w-5 h-5" />
									<p className="font-fixedsys text-white">{name}</p>
									<span
										className="ml-auto float-right flex justify-center items-center bg-almostwhite text-black border-r-gray border-b-gray border-2 h-8 w-8 text-3xl leading-none font-semibold outline-none cursor-pointer font-fixedsys"
										onClick={() => setShowModal(false)}>
										×
									</span>
								</div>
								<div className="bg-almostwhite h-12 border-r-gray border-b-gray border-b-8 border-r-8 outline-offset-1 border-l-almostwhite ml-2 border-l-0"></div>
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
									<div className="border-l-[5px] border-black w-full h-full ml-2 border-r-[5px]"></div>
									<div className="w-[32px] h-full border-4 border-r-gray border-b-gray border-t-0 border-l-0 cursor-drag "></div>
								</div>
							</div>
						</div>
					</div>
				</Draggable>
			) : null}
		</>
	);
};

export default Modal;
