import { CreateBookView } from "../../sections/book/view";
import BookView from "../../sections/book/view/book-list-view";

export default function BookPage() {
	return (
		<div>
			<CreateBookView />
			<BookView />
		</div>
	);
}
