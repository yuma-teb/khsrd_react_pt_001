import { BookType } from "../../../types/book";

export type CardTypeProps = BookType & {
	handleRemove: (id: number) => void;
};
