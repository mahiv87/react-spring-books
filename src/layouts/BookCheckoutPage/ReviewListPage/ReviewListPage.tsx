import { useEffect, useState } from 'react';
import { ReviewModel } from '../../../models/ReviewModel';
import Spinner from '../../utils/Spinner';

const ReviewListPage = () => {
	const [reviews, setReviews] = useState<ReviewModel[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [reviewsPerPage] = useState(5);
	const [totalAmountOfReviews, setTotalAmountOfReviews] = useState(0);
	const [totalPages, setTotalPages] = useState(0);

	const bookId = window.location.pathname.split('/')[2];

	useEffect(() => {
		const fetchBookReviews = async () => {
			const url: string = `http://localhost:8080/api/reviews/search/findByBookId?bookId=${bookId}&page=${
				currentPage - 1
			}&size=${reviewsPerPage}`;

			const response = await fetch(url);

			if (!response.ok) {
				throw new Error('Something went wrong');
			}

			const responseJson = await response.json();

			const responseData = responseJson._embedded.reviews;

			setTotalAmountOfReviews(responseJson.page.totalElements);
			setTotalPages(responseJson.page.totalPages);

			const loadedReviews = responseData.map((review: ReviewModel) => ({
				id: review.id,
				userEmail: review.userEmail,
				date: review.date,
				rating: review.rating,
				book_id: review.bookId,
				reviewDescription: review.reviewDescription
			}));

			setReviews(loadedReviews);
			setIsLoading(false);
		};

		fetchBookReviews().catch((error) => {
			setIsLoading(false);
			setHttpError(error.message);
		});
	}, [currentPage]);

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
			<div>ReviewListPage</div>
		</div>
	);
};

export default ReviewListPage;
