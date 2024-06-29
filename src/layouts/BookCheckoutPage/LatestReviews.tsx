import { Link } from 'react-router-dom';
import { ReviewModel } from '../../models/ReviewModel';

const LatestReviews: React.FC<{
	reviews: ReviewModel[];
	bookId: number | undefined;
}> = ({ reviews }) => {
	return (
		<div className="mt-3 md:flex md:mt-5">
			<div className="sm:w-1/6">
				<h2>LatestReviews</h2>
			</div>
			<div className="sm:w-5/6">
				{reviews.length > 0 ? (
					<>
						{reviews.slice(0, 3).map((review) => (
							<Review review={review} key={review.id}></Review>
						))}

						<div className="m-3">
							<Link to="#" type="button" className="btn main-color text-white">
								Reach all reviews
							</Link>
						</div>
					</>
				) : (
					<div className="m-3">
						<p className="font-light text-lg my-4">
							There are currently no reviews for this book.
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default LatestReviews;
