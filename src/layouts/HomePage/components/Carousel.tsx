import { useEffect, useState } from 'react';
import ReturnBook from './ReturnBook';
import { BookModel } from '../../../models/BookModel';
import Spinner from '../../utils/Spinner';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../../utils/API';

const Carousel = () => {
	const [books, setBooks] = useState<BookModel[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState(null);

	useEffect(() => {
		const query = '?page=0size=9';
		fetchBooks(query)
			.then((loadedBooks) => {
				setBooks(loadedBooks);
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
		<div
			className="container flex flex-col w-full mx-auto justify-start items-center my-10"
			style={{ height: 550 }}
		>
			<div className="homepage-carousel-title text-center">
				<h3 className="text-2xl text-neutral-900 pb-4">
					Find your next "I stayed up too late reading" book
				</h3>
			</div>
			<div className="carousel rounded-box w-11/12">
				<div
					id="slide1"
					className="carousel-item relative w-full justify-center items-center"
				>
					{books.slice(0, 3).map((book) => (
						<ReturnBook book={book} key={book.id} />
					))}
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between text-center">
						<a
							href="#slide3"
							className="text-xl text-neutral-500 hover:text-neutral-500/50"
						>
							❮
						</a>
						<a
							href="#slide2"
							className="text-xl text-neutral-500 hover:text-neutral-500/50"
						>
							❯
						</a>
					</div>
				</div>
				<div
					id="slide2"
					className="carousel-item relative w-full justify-center items-center"
				>
					{books.slice(3, 6).map((book) => (
						<ReturnBook book={book} key={book.id} />
					))}
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between text-center">
						<a
							href="#slide1"
							className="text-xl text-neutral-500 hover:text-neutral-500/50"
						>
							❮
						</a>
						<a
							href="#slide3"
							className="text-xl text-neutral-500 hover:text-neutral-500/50"
						>
							❯
						</a>
					</div>
				</div>
				<div
					id="slide3"
					className="carousel-item relative w-full justify-center items-center"
				>
					{books.slice(6, 9).map((book) => (
						<ReturnBook book={book} key={book.id} />
					))}
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between text-center">
						<a
							href="#slide2"
							className="text-xl text-neutral-500 hover:text-neutral-500/50"
						>
							❮
						</a>
						<a
							href="#slide1"
							className="text-xl text-neutral-500 hover:text-neutral-500/50"
						>
							❯
						</a>
					</div>
				</div>
			</div>
			<div className="homepage-carousel-title mt-3">
				<Link
					className="py-3 px-6 text-lg border border-solid rounded-lg hover:bg-neutral-500/50 hover:text-white"
					to="/search"
				>
					View More
				</Link>
			</div>
		</div>
	);
};

export default Carousel;
