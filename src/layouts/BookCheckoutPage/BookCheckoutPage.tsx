import { useState } from 'react';
import BookModel from '../../models/BookModel';

const BookCheckoutPage = () => {
	const [book, setBook] = useState<BookModel>();
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState(null);

	return (
		<div>
			<div>BookCheckoutPage</div>;
		</div>
	);
};

export default BookCheckoutPage;
