import { useEffect, useState } from 'react';
import BookModel from '../../models/BookModel';
import { fetchBooks } from '../utils/fetchBooks';

const BookCheckoutPage = () => {
	const [book, setBook] = useState<BookModel>();
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState(null);

	const bookId = window.location.pathname.split('/')[2];

	useEffect(() => {
		const query = `/checkout/${bookId}`;
		fetchBooks(query)
			.then(([loadedBooks, singleBook]) => {
				setBook(singleBook);
				setIsLoading(false);
			})
			.catch((error) => {
				setIsLoading(false);
				setHttpError(error.message);
			});
	}, []);

	return (
		<div>
			<div>BookCheckoutPage</div>;
		</div>
	);
};

export default BookCheckoutPage;
