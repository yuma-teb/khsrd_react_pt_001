import { BookType } from "@/types/book";
import BookCard from "@/components/book/card/card";
type Props = {
	books: BookType[];
	handleRemove: (id: number) => void;
};
export default function BookList({ books, handleRemove }: Readonly<Props>) {
	console.log("books", books);
	return (
		<>
			{books?.map((book) => (
				<BookCard key={book.id} {...book} handleRemove={handleRemove} />
			))}
		</>
	);
}
