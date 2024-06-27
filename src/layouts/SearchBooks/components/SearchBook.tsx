import BookModel from '../../../models/BookModel';
import defaultImg from '../../../Images/BooksImages/book-luv2code-1000.png';

const SearchBook: React.FC<{ book: BookModel }> = ({ book }) => {
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
				<h2 className="card-title font-bold text-2xl">{book.title}</h2>
				<h4 className="text-lg italic">{book.author}</h4>
				<p>{book.description}</p>
				<div className="card-actions justify-center lg:justify-end">
					<button className="btn bg-neutral-500 border-neutral-500 hover:bg-neutral-500/80 hover:border-neutral-500 text-white">
						View Details
					</button>
				</div>
			</div>
		</div>
	);
};

export default SearchBook;
