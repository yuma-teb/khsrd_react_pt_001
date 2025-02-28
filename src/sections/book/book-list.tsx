import { BookType } from "../../types/book";
import BookCard from "../../components/book/card/card";
type Props = {
	books: BookType[];
};
export default function BookList({ books }: Readonly<Props>) {
	return (
		<>
			{books?.map((book) => (
				<BookCard key={book.id} {...book} />
			))}
		</>
	);
}
