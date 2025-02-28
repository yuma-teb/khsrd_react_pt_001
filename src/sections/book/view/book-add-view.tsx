import { FloatingLabel } from "flowbite-react";
import { BookType } from "../../../types/book";
import { useEffect, useState } from "react";
export default function BookCreate() {
	const [book, setBook] = useState<Partial<BookType>>();

	useEffect(() => {
		console.log(book);
	}, [book]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setBook((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

	return (
		<form className="p-4 bg-white shadow-md rounded-lg">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<FloatingLabel
					variant="outlined"
					label="Title"
					name="title"
					autoFocus={true}
					onChange={handleChange}
				/>
				<FloatingLabel
					variant="outlined"
					name="author"
					label="Author Name"
					onChange={handleChange}
				/>
				<FloatingLabel
					variant="outlined"
					name="edition"
					type="number"
					label="Edition"
					onChange={handleChange}
				/>
				<FloatingLabel
					variant="outlined"
					name="quantity"
					label="Quantity"
					type="number"
					onChange={handleChange}
				/>
			</div>
			<div className="mt-4">
				<button
					type="submit"
					className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
				>
					Submit
				</button>
			</div>
		</form>
	);
}
