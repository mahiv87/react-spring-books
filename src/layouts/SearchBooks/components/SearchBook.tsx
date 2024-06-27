import BookModel from '../../../models/BookModel';
import defaultImg from '../../../Images/BooksImages/book-luv2code-1000.png';

const SearchBook: React.FC<{ book: BookModel }> = ({ book }) => {
	return (
		<div className="card lg:card-side md:w-2/3 mx-auto my-5 shadow-xl">
			<figure>
				{book.img ? (
					<img src={book.img} width="123" height="196" alt="Book" />
				) : (
					<img src={defaultImg} width="123" height="196" alt="Book" />
				)}
			</figure>
			<div className="card-body">
				<h2 className="card-title">{book.title}</h2>
				<p>{book.description}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary text-white">View Details</button>
				</div>
			</div>
		</div>
	);
};

export default SearchBook;
