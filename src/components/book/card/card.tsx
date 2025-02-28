import { Card } from "flowbite-react";
import { CardTypeProps } from "./type";
import { GiCancel } from "react-icons/gi";
import { useState } from "react";
import { ModalComponent } from "../modal/modal";

export default function BookCard({
	id,
	title,
	author,
	edition,
	quantity,
	date,
	handleRemove,
}: Readonly<CardTypeProps>) {
	const [isDeleting, setIsDeleting] = useState<boolean>(false);
	return (
		<>
			<Card href="#" className="max-w-sm relative">
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{title}
				</h5>
				<p className="font-normal text-gray-700 dark:text-gray-400">{author}</p>
				<p className="font-normal text-gray-700 dark:text-gray-400">
					edition: {edition}
				</p>
				<p className="font-normal text-gray-700 dark:text-gray-400">
					quantity: {quantity}
				</p>
				<p className="font-normal text-gray-700 dark:text-gray-400">
					publish at: {date?.toString()}
				</p>
				<GiCancel
					className="w-6 h-6 absolute -top-2 -right-3"
					color="red"
					onClick={() => setIsDeleting(!isDeleting)}
				/>
			</Card>
			{isDeleting && (
				<ModalComponent
					handleRemoveBook={handleRemove}
					id={id}
					onCancel={() => setIsDeleting(false)}
					title={`Are you sure to want to delete ${title}`}
				/>
			)}
		</>
	);
}
