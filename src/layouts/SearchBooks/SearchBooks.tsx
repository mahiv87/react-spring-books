import { useEffect, useState } from 'react';
import BookModel from '../../models/BookModel';
import Spinner from '../utils/Spinner';
import SearchBook from './components/SearchBook';

const SearchBooks = () => {
	const [books, setBooks] = useState<BookModel[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState(null);

	useEffect(() => {
		const fetchBooks = async () => {
			const baseUrl: string = 'http://localhost:8080/api/books';
			const url: string = `${baseUrl}?page=0size=5`;

			const response = await fetch(url);
			if (!response.ok) {
				throw new Error('Something went wrong...');
			}

			const responseJson = await response.json();
			const responseData = responseJson._embedded.books;

			const loadedBooks = responseData.map((book: BookModel) => ({
				id: book.id,
				title: book.title,
				author: book.author,
				description: book.description,
				copies: book.copies,
				copiesAvailable: book.copiesAvailable,
				category: book.category,
				img: book.img
			}));

			setBooks(loadedBooks);
			setIsLoading(false);
		};
		fetchBooks().catch((error) => {
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
			<div className="container mx-auto my-5">
				<div>
					<div className="flex flex-wrap justify-center items-center mt-5">
						<div className="w-1/2">
							<div className="flex">
								<input
									type="search"
									className="form-input w-80 italic text-lg mr-2 bg-white border border-solid border-teal-500 rounded-lg pl-2"
									placeholder="Search"
									aria-labelledby="Search"
								/>
								<button className="btn bg-teal-500 text-white border-solid border-teal-500 rounded-lg hover:bg-teal-500/80 hover:border-teal-500 hover:text-white">
									Search
								</button>
							</div>
						</div>
						<div className="w-1/3 text-center">
							<details className="dropdown">
								<summary className="btn bg-teal-500 text-white border-solid border-teal-500 list-none hover:bg-teal-500/80 hover:text-white hover:border-teal-500">
									Category
								</summary>
								<ul className="menu dropdown-content bg-white rounded-lg z-[1] w-52 p-2 shadow">
									<li>
										<a>All</a>
									</li>
									<li>
										<a>Front End</a>
									</li>
									<li>
										<a>Back End</a>
									</li>
									<li>
										<a>Data</a>
									</li>
									<li>
										<a>DevOps</a>
									</li>
								</ul>
							</details>
						</div>
					</div>

					<div className=" mt-3">
						<h5>Number of results: (22)</h5>
					</div>
					<p className="flex justify-end">1 to 5 of 22 items</p>
					{books.map((book) => (
						<SearchBook book={book} key={book.id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default SearchBooks;
