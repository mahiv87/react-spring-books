import { Link } from 'react-router-dom';
import { BookModel } from '../../models/BookModel';
import { useOktaAuth } from '@okta/okta-react';

const CheckoutAndReview: React.FC<{ book: BookModel | undefined }> = ({
	book
}) => {
	const { authState } = useOktaAuth();

	return (
		<div className="card flex mt-5 w-11/12 md:w-1/4 md:container md:mb-5 shadow-xl">
			<div className="card-body">
				<div className="mt-3">
					<p>
						<span className="font-semibold mr-1">0/5</span>
						books checked out
					</p>
					<div className="divider "></div>
				</div>
				{book && book.copiesAvailable && book.copiesAvailable > 0 ? (
					<h4 className="text-teal-500 text-xl font-semibold">Available</h4>
				) : (
					<h4 className="text-orange-500">Wait List</h4>
				)}
				<div className="flex">
					<p className="w-1/2 text-lg  my-4">
						<span className="font-semibold mr-1">{book?.copies}</span>
						copies
					</p>
					<p className="w-1/2 text-lg my-4">
						<span className="font-semibold mr-1">{book?.copiesAvailable}</span>
						available
					</p>
				</div>
				<div className="card-actions justify-start">
					{!authState?.isAuthenticated ? (
						<Link
							to="/#"
							className="btn border-teal-500 bg-teal-500 hover:bg-teal-500/80 hover:border-teal-500/80 text-white"
						>
							Sign in
						</Link>
					) : (
						<Link
							to="/#"
							className="btn border-teal-500 bg-teal-500 hover:bg-teal-500/80 hover:border-teal-500/80 text-white"
						>
							Checkout
						</Link>
					)}
				</div>
				<div className="divider"></div>
				<p className="mt-3">
					This number can change until placing order has been complete.
				</p>
				<p>Sign in to leave a review.</p>
			</div>
		</div>
	);
};

export default CheckoutAndReview;
