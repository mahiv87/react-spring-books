import BookModel from '../../models/BookModel';

// Fetch books for Carousel
export const fetchBooks = async (query: string): Promise<BookModel[]> => {
	const baseUrl: string = 'http://localhost:8080/api/books';
	const url: string = `${baseUrl}${query}`;

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

// Fetch a single book by id
export const fetchBook = async (query: string): Promise<BookModel> => {
	const baseUrl: string = 'http://localhost:8080/api/books';
	const url: string = `${baseUrl}${query}`;

	const response = await fetch(url);
	if (!response.ok) {
		throw new Error('Something went wrong...');
	}

	const responseJson = await response.json();

	const singleBook: BookModel = {
		id: responseJson.id,
		title: responseJson.title,
		author: responseJson.author,
		description: responseJson.description,
		copies: responseJson.copies,
		copiesAvailable: responseJson.copiesAvailable,
		category: responseJson.category,
		img: responseJson.img
	};

	return singleBook;
};
