import { BookType } from "../../types/book";

type Props = {
	books: BookType[];
};
export default function BookList({ books }: Readonly<Props>) {}
