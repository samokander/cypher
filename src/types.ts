export interface ModalProps {
	showModal: boolean;
	setShowModal: (show: boolean) => void;
	children: React.ReactNode;
	name: string;
	icon: string;
}
