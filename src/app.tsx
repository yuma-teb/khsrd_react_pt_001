import { BookProvider } from "./context/book-provider";
import BookPage from "./pages/Book";
export default function App() {
	return (
		<BookProvider>
			<BookPage />
		</BookProvider>
	);
}
