import { useEffect, useState } from 'react';
import BookModel from '../../models/BookModel';

const SearchBooks = () => {
	const [books, setBooks] = useState<BookModel[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState(null);

	useEffect(() => {
		const fetchBooks = async () => {
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

			setBooks(loadedBooks);
			setIsLoading(false);
		};
		fetchBooks().catch((error) => {
			setIsLoading(false);
			setHttpError(error.message);
		});
	}, []);
	return (
		<>
			<div>SearchBooks</div>
		</>
	);
};

export default SearchBooks;
