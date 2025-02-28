import { STORAGE_KEY } from "@/utils/storageConstants";
import { MOCK_BOOK } from "../../../_mock/_books";
import BookList from "../book-list";
import {
	Accordion,
	AccordionContent,
	AccordionPanel,
	AccordionTitle,
} from "flowbite-react";
import { useContext, useEffect } from "react";
import { BookContext, BookProvider } from "@/context/book-provider";

export default function BookView() {
	const bookContext = useContext(BookContext);

	if (!bookContext) {
		throw new Error("useBook must be used within a BookProvider");
	}

	const { books, handleRemoveBookById } = bookContext;

	return (
		<Accordion collapseAll>
			<AccordionPanel>
				<AccordionTitle>Book List</AccordionTitle>
				<AccordionContent>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
						<BookList books={books} handleRemove={handleRemoveBookById} />
					</div>
				</AccordionContent>
			</AccordionPanel>
		</Accordion>
	);
}
