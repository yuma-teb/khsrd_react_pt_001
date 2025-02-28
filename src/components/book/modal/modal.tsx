import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

type Props = {
	id: number;
	title?: string;
	handleRemoveBook: (id: number) => void;
	onCancel: VoidFunction;
};
export function ModalComponent({
	handleRemoveBook,
	onCancel,
	id,
	title = defaultTitle,
}: Readonly<Props>) {
	const [openModal, setOpenModal] = useState(true);

	const removeBook = () => {
		handleRemoveBook(id);
		setOpenModal(false);
	};

	const handleCancel = () => {
		setOpenModal(false);
		onCancel();
	};
	return (
		<>
			<Modal show={openModal} size="md" onClose={handleCancel} popup>
				<Modal.Header />
				<Modal.Body>
					<div className="text-center">
						<HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
						<h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
							{title}
						</h3>
						<div className="flex justify-center gap-4">
							<Button color="failure" onClick={removeBook}>
								{"Yes, I'm sure"}
							</Button>
							<Button color="gray" onClick={handleCancel}>
								No, cancel
							</Button>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
}

const defaultTitle = "Are you sure?";
