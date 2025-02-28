import { CreateBookView } from "../../sections/book/view";
import BookView from "../../sections/book/view/book-list-view";

export default function BookPage() {
	return (
		<div className="container mx-auto py-5 px-4 ">
			<p className="text-3xl text-center">CRUD BOOK</p>
			<div className="flex flex-col gap-5">
				<CreateBookView />
				<BookView />
			</div>
		</div>
	);
}
