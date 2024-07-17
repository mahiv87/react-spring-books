import { useEffect, useState } from 'react';
import { BookModel } from '../../../models/BookModel';
import { useOktaAuth } from '@okta/okta-react';

import defaultImg from '../../../Images/BooksImages/book-luv2code-1000.png';
import { Link } from 'react-router-dom';

const ChangeBook: React.FC<{ book: BookModel }> = ({ book }) => {
	const { authState } = useOktaAuth();

	const [qty, setQty] = useState<number>(0);
	const [remaining, setRemaining] = useState<number>(0);

	useEffect(() => {
		setQty(book.copies || 0);
		setRemaining(book.copiesAvailable || 0);
	}, [book.copies, book.copiesAvailable]);

	return (
		<div className="card lg:card-side md:w-2/3 md:mx-auto mx-5 my-5 shadow-xl">
			<figure className="lg:w-1/3 lg:mx-auto">
				{book.img ? (
					<img src={book.img} width="123" height="196" alt="Book" />
				) : (
					<img src={defaultImg} width="123" height="196" alt="Book" />
				)}
			</figure>

			<div className="card-body lg:w-2/3 lg:mx-auto">
				<h2 className="card-title font-bold text-2xl text-neutral-500">
					{book.title}
				</h2>
				<h4 className="text-lg italic text-neutral-500/80 font-semibold">
					{book.author}
				</h4>
				<p>{book.description}</p>

				<div className="mt-10 mb-3 md:w-1/3">
					<div className="flex justify-center items-center">
						<p className="text-xl">
							Total Quantity: <b>{qty}</b>
						</p>
					</div>
					<div className="flex justify-center items-center">
						<p className="text-xl">
							Total Remaining: <b>{remaining}</b>
						</p>
					</div>
				</div>

				<div className="mt-3">
					<div className="flex justify-end">
						<button className="btn bg-rose-500 border-rose-500 hover:bg-rose-500/80 hover:border-rose-500 text-white text-lg">
							Delete
						</button>
					</div>
				</div>

				<button className="btn bg-main-color border-main-color hover:bg-main-color/80 hover:border-main-color text-white text-lg">
					Add Quantity
				</button>
				<button className="btn bg-amber-500 border-amber-500 hover:bg-amber-500/80 hover:border-amber-500 text-white text-lg">
					Decrease Quantity
				</button>
			</div>
		</div>
	);
};

export default ChangeBook;
