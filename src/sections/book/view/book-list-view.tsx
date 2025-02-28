import { MOCK_BOOK } from "../../../_mock/_books";
import BookList from "../book-list";
import {
	Accordion,
	AccordionContent,
	AccordionPanel,
	AccordionTitle,
} from "flowbite-react";

export default function BookView() {
	return (
		<Accordion collapseAll>
			<AccordionPanel>
				<AccordionTitle>Book List</AccordionTitle>
				<AccordionContent>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
						<BookList books={MOCK_BOOK} />
					</div>
				</AccordionContent>
			</AccordionPanel>
		</Accordion>
	);
}
