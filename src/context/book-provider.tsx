import { BookType } from "@/types/book";
import { useEffect, useState } from "react";
import { createContext } from "react";

type Props = {
	children: React.ReactNode;
};

type BookContextProps = {
	books: BookType[];
	handleSetBooks: (book: BookType) => void;
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

	const bookMemo = {
		books,
		handleSetBooks,
	};
	return <BookContext value={bookMemo}>{children}</BookContext>;
}

export { BookContext, BookProvider };
