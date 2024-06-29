import BookModel from '../../models/BookModel';

export const fetchBooks = async (
	query: string
): Promise<[BookModel[], BookModel]> => {
	const baseUrl: string = 'http://localhost:8080/api/books';
	const url: string = `${baseUrl}${query}`;

	const response = await fetch(url);
	if (!response.ok) {
		throw new Error('Something went wrong...');
	}

	const responseJson = await response.json();
	const responseData = responseJson._embedded.books;

	const loadedBooks: BookModel[] = responseData.map((book: BookModel) => ({
		id: book.id,
		title: book.title,
		author: book.author,
		description: book.description,
		copies: book.copies,
		copiesAvailable: book.copiesAvailable,
		category: book.category,
		img: book.img
	}));

	const singleBook: BookModel = loadedBooks[0];
	return [loadedBooks, singleBook];
};
