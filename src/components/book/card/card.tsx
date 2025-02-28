import { Card } from "flowbite-react";
import { CardTypeProps } from "./type";

export default function BookCard({
	title,
	author,
	edition,
	quantity,
	date,
}: Readonly<CardTypeProps>) {
	return (
		<Card href="#" className="max-w-sm">
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
		</Card>
	);
}
