import { CreateBookView } from "../../sections/book/view";
import BookView from "../../sections/book/view/book-list-view";

export default function BookPage() {
	return (
		<>
			<div className="container mx-auto py-5 px-4 flex flex-col gap-5">
				<CreateBookView />
				<BookView />
			</div>
		</>
	);
}
