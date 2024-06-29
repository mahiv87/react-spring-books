import { ReviewModel } from '../../models/ReviewModel';

const LatestReviews: React.FC<{
	reviews: ReviewModel[];
	bookId: number | undefined;
}> = () => {
	return (
		<div>
			<div>LatestReviews</div>
		</div>
	);
};

export default LatestReviews;
