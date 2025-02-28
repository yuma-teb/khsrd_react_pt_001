import { BookType } from "@/types/book";
import { useEffect, useState } from "react";
import { createContext } from "react";

type Props = {
	children: React.ReactNode;
};

type BookContextProps = {
	books: BookType[];
	handleSetBooks: (book: BookType) => void;
	handleRemoveBookById: (id: number) => void;
};

const BookContext = createContext<BookContextProps>({} as BookContextProps);
function BookProvider({ children }: Props) {
	const [books, setBooks] = useState<BookType[]>([]);

	useEffect(() => {
		const bookData = JSON.parse(localStorage.getItem("book") as string) || [];
		setBooks(bookData);
	}, []);

	const handleSetBooks = (book: BookType) => {
		localStorage.setItem("book", JSON.stringify([...books, book]));
		setBooks([...books, book]);
	};

	const handleRemoveBookById = (id: number) => {
		const updatedBook = books.filter((book) => book.id !== id);
		localStorage.setItem("book", JSON.stringify(updatedBook));
		setBooks(updatedBook);
	};

	const bookMemo = {
		books,
		handleSetBooks,
		handleRemoveBookById,
	};
	return <BookContext value={bookMemo}>{children}</BookContext>;
}

export { BookContext, BookProvider };
