import React from "react";
import { ModalProps } from "../types"; // Импортируем интерфейс
import Draggable from "react-draggable";

const Modal: React.FC<ModalProps> = ({ showModal, setShowModal, children }) => {
	return (
		<>
			{showModal ? (
				<Draggable handle=".handle">
					<div className="fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="absolute w-auto my-6 mx-auto max-w-3xl top-0 left-0">
							{/* Content */}
							<div className="w-[1280px] h-[828px]">
								{/* Header */}
								<div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t handle">
									<h3 className="text-3xl font-semibold">Modal Title</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}>
										×
									</button>
								</div>
								{/* Body */}
								<div className="relative p-6 flex-auto">{children}</div>
								{/* Footer */}
								<div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
										type="button"
										onClick={() => setShowModal(false)}>
										Close
									</button>
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
