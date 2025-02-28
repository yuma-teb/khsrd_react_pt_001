import { MOCK_BOOK } from "../../../_mock/_books";
import BookList from "../book-list";

export default function BookView() {
	return (
		<div>
			<BookList books={MOCK_BOOK} />
		</div>
	);
}
