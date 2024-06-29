import { useEffect, useState } from 'react';
import BookModel from '../../models/BookModel';
import { fetchBook } from '../utils/API';
import Spinner from '../utils/Spinner';
import defaultBook from '../../Images/BooksImages/book-luv2code-1000.png';
import StarRating from '../utils/StarRating';

const BookCheckoutPage = () => {
	const [book, setBook] = useState<BookModel>();
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState(null);

	const bookId = window.location.pathname.split('/')[2];

	useEffect(() => {
		const query = `/${bookId}`;

		fetchBook(query)
			.then((singleBook) => {
				setBook(singleBook);
				setIsLoading(false);
			})
			.catch((error) => {
				setIsLoading(false);
				setHttpError(error.message);
			});
	}, []);

	if (isLoading) {
		return <Spinner />;
	}

	if (httpError) {
		return (
			<div className="container mx-auto my-5" style={{ height: 550 }}>
				<p>{httpError}</p>
			</div>
		);
	}

	return (
		<div>
			<div className="container flex flex-col mx-auto">
				<div className="flex md:flex-row flex-col md:justify-evenly md:items-start justify-center items-center mt-5">
					<div className="sm:w-1/6 md:w-1/6">
						{book?.img ? (
							<img src={book.img} width="226" height="349" alt="book image" />
						) : (
							<img
								src={defaultBook}
								width="226"
								height="349"
								alt="defaut book image"
							/>
						)}
					</div>

					<div className="container w-1/3 md:w-1/3 mt-4 md:mt-0">
						<div className="ml-2">
							<h2 className="text-2xl font-semibold">{book?.title}</h2>
							<h5 className="">{book?.author}</h5>
							<p className="text-lg font-light my-4">{book?.description}</p>
						</div>
					</div>
				</div>
				<StarRating />
				<div className="divider "></div>
			</div>
		</div>
	);
};

export default BookCheckoutPage;
