import { useEffect, useState } from 'react';
import ReturnBook from './ReturnBook';
import BookModel from '../../../models/BookModel';

const Carousel = () => {
	const [books, setBooks] = useState<BookModel[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState(null);

	// useEffect(() => {
	// 	const fetchBooks = async () => {
	// 		const baseUrl: string = 'http://localhost:8080/api/books';
	// 		const url: string = `${baseUrl}?page=0size=9`;

	// 		const response = await fetch(url);
	// 		if (!response.ok) {
	// 			throw new Error('Something went wrong...');
	// 		}

	// 		const responseJson = await response.json();
	// 		const responseData = responseJson._embedded.books;

	// 		const loadedBooks = responseData.map((book: BookModel) => ({
	// 			id: book.id,
	// 			title: book.title,
	// 			author: book.author,
	// 			description: book.description,
	// 			copies: book.copies,
	// 			copiesAvailable: book.copiesAvailable,
	// 			category: book.category,
	// 			img: book.img
	// 		}));

	// 		setBooks(loadedBooks);
	// 		setIsLoading(false);
	// 	};
	// 	fetchBooks().catch((error) => {
	// 		setIsLoading(false);
	// 		setHttpError(error.message);
	// 	});
	// }, []);

	if (isLoading) {
		return (
			<div
				className="container flex justify-center items-center mx-auto my-5"
				style={{ height: 550 }}
			>
				<iframe
					src="https://lottie.host/embed/15af1897-f533-4d62-ac4a-22241ea8b2a2/7KGqyGYxLS.json"
					className="h-full"
				></iframe>
			</div>
		);
	}

	if (httpError) {
		return (
			<div className="container mx-auto my-5">
				<p>{httpError}</p>
			</div>
		);
	}

	return (
		<div
			className="container flex flex-col w-full mx-auto justify-start items-center"
			style={{ height: 550 }}
		>
			<div className="homepage-carousel-title text-center">
				<h3 className="text-2xl text-neutral-900 pb-4">
					Find your next "I stayed up too late reading" book
				</h3>
			</div>
			<div className="carousel rounded-box w-11/12 ">
				<div
					id="slide1"
					className="carousel-item relative w-full justify-center items-center"
				>
					<ReturnBook />
					<ReturnBook />
					<ReturnBook />
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between text-center">
						<a
							href="#slide7"
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
					<ReturnBook />
					<ReturnBook />
					<ReturnBook />
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
					<ReturnBook />
					<ReturnBook />
					<ReturnBook />
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between text-center">
						<a
							href="#slide2"
							className="text-xl text-neutral-500 hover:text-neutral-500/50"
						>
							❮
						</a>
						<a
							href="#slide4"
							className="text-xl text-neutral-500 hover:text-neutral-500/50"
						>
							❯
						</a>
					</div>
				</div>
				<div
					id="slide4"
					className="carousel-item relative w-full justify-center items-center"
				>
					<ReturnBook />
					<ReturnBook />
					<ReturnBook />
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between text-center">
						<a
							href="#slide3"
							className="text-xl text-neutral-500 hover:text-neutral-500/50"
						>
							❮
						</a>
						<a
							href="#slide5"
							className="text-xl text-neutral-500 hover:text-neutral-500/50"
						>
							❯
						</a>
					</div>
				</div>
				<div
					id="slide5"
					className="carousel-item relative w-full justify-center items-center"
				>
					<ReturnBook />
					<ReturnBook />
					<ReturnBook />
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between text-center">
						<a
							href="#slide4"
							className="text-xl text-neutral-500 hover:text-neutral-500/50"
						>
							❮
						</a>
						<a
							href="#slide6"
							className="text-xl text-neutral-500 hover:text-neutral-500/50"
						>
							❯
						</a>
					</div>
				</div>
				<div
					id="slide6"
					className="carousel-item relative w-full justify-center items-center"
				>
					<ReturnBook />
					<ReturnBook />
					<ReturnBook />
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between text-center">
						<a
							href="#slide5"
							className="text-xl text-neutral-500 hover:text-neutral-500/50"
						>
							❮
						</a>
						<a
							href="#slide7"
							className="text-xl text-neutral-500 hover:text-neutral-500/50"
						>
							❯
						</a>
					</div>
				</div>
				<div
					id="slide7"
					className="carousel-item relative w-full justify-center items-center"
				>
					<ReturnBook />
					<ReturnBook />
					<ReturnBook />
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between text-center">
						<a
							href="#slide6"
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
				<a
					className="py-3 px-6 text-lg border border-solid rounded-lg hover:bg-neutral-500/50 hover:text-white"
					href="#"
				>
					View More
				</a>
			</div>
		</div>
	);
};

export default Carousel;
