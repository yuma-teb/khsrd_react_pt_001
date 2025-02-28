import { FloatingLabel } from "flowbite-react";
import { BookType } from "@/types/book";
import { useActionState, useContext, useState } from "react";
import { STORAGE_KEY } from "@/utils/storageConstants";
import { BookContext } from "@/context/book-provider";

export default function BookCreate() {
	const [book, setBook] = useState<BookType>();
	const [formState, formAction] = useActionState<BookType>(
		handleSubmit,
		{} as BookType
	);
	const bookContext = useContext(BookContext);
	if (!bookContext) {
		throw new Error("useBook must be used within a BookProvider");
	}

	const { books, handleSetBooks } = bookContext;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setBook((prev) => ({ ...prev, [name]: value } as BookType));
	};

	function handleSubmit(formData: BookType): BookType {
		const id = books.length + 1;
		const date = new Date();
		const newBook = { ...book, id, date };
		handleSetBooks(newBook as BookType);
		return book as BookType;
	}

	return (
		<form className="p-4 bg-white shadow-md rounded-lg" action={formAction}>
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
					min={1}
				/>
				<FloatingLabel
					variant="outlined"
					name="edition"
					type="number"
					label="Edition"
					onChange={handleChange}
					min={1}
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
