import BookModel from '../../models/BookModel';

export const fetchBooks = async (): Promise<BookModel[]> => {
	const baseUrl: string = 'http://localhost:8080/api/books';
	const url: string = `${baseUrl}?page=0size=9`;

	const response = await fetch(url);
	if (!response.ok) {
		throw new Error('Something went wrong...');
	}

	const responseJson = await response.json();
	const responseData = responseJson._embedded.books;

	const loadedBooks = responseData.map((book: BookModel) => ({
		id: book.id,
		title: book.title,
		author: book.author,
		description: book.description,
		copies: book.copies,
		copiesAvailable: book.copiesAvailable,
		category: book.category,
		img: book.img
	}));

	return loadedBooks;
};
