import { useEffect, useRef, useState } from 'react';
import { BookModel } from '../../models/BookModel';
import { ReviewModel } from '../../models/ReviewModel';
import {
	fetchBook,
	fetchBookReviews,
	fetchUserCurrentLoansCount
} from '../utils/API';
import Spinner from '../utils/Spinner';
import defaultBook from '../../Images/BooksImages/book-luv2code-1000.png';
import StarRating from '../utils/StarRating';
import CheckoutAndReview from './CheckoutAndReview';
import LatestReviews from './LatestReviews';
import { useOktaAuth } from '@okta/okta-react';

const BookCheckoutPage = () => {
	const [book, setBook] = useState<BookModel>();
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState(null);
	const [rating, setRating] = useState(0);
	const [reviews, setReviews] = useState<ReviewModel[]>([]);
	const [isLoadingReview, setIsLoadingReview] = useState(true);
	const [currentLoansCount, setCurrentLoansCount] = useState(0);
	const [isLoadingCurrentLoansCount, setIsLoadingCurrentLoansCount] =
		useState(true);
	const [isCheckedOut, setIsCheckedOut] = useState(false);
	const [isLoadingBookCheckedOut, setIsLoadingBookCheckedOut] = useState(true);

	const { authState } = useOktaAuth();

	const bookId = window.location.pathname.split('/')[2];

	const weightedStarReviews = useRef<number>(0);

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

	useEffect(() => {
		fetchBookReviews(bookId)
			.then((reviews) => {
				let totalRating = 0;
				reviews.forEach((review) => {
					totalRating += review.rating;
					console.log(totalRating);
				});
				weightedStarReviews.current = totalRating;

				if (reviews.length > 0) {
					const avgRating = totalRating / reviews.length;
					const rounded = Math.floor(avgRating * 2) / 2;
					setRating(Number(rounded));
				}

				setReviews(reviews);
				setIsLoadingReview(false);
			})
			.catch((error) => {
				setIsLoadingReview(false);
				setHttpError(error.message);
			});
	}, [bookId]);

	useEffect(() => {
		const clcAuthState = authState;
		fetchUserCurrentLoansCount(clcAuthState)
			.then((count) => {
				setCurrentLoansCount(count);
				setIsLoadingCurrentLoansCount(false);
			})
			.catch((error) => {
				setIsLoadingCurrentLoansCount(false);
				setHttpError(error.message);
			});
	}, [authState]);

	if (isLoading || isLoadingReview || isLoadingCurrentLoansCount) {
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
			<div className="container flex flex-col md:mx-auto">
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

					<div className="container w-11/12 md:w-1/3 mt-4 md:mt-0">
						<div className="ml-2">
							<h2 className="text-2xl font-semibold">{book?.title}</h2>
							<h5 className="">{book?.author}</h5>
							<p className="text-lg font-light my-4">{book?.description}</p>
							<StarRating rating={rating} />
						</div>
					</div>
					<CheckoutAndReview
						book={book}
						currentLoansCount={currentLoansCount}
					/>
				</div>
				<div className="divider "></div>
				<LatestReviews reviews={reviews} bookId={book?.id} />
			</div>
		</div>
	);
};

export default BookCheckoutPage;
