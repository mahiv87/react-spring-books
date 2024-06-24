import bookSlide from './../../../Images/BooksImages/book-luv2code-1000.png';

const ReturnBook = () => {
	return (
		<div className="flex flex-col justify-center items-center">
			<img
				src={bookSlide}
				className="w-1/2"
				alt="Tailwind CSS Carousel component"
			/>
			<h6 className="mt-2">book</h6>
			<p>Luv2Code</p>
			<a
				href="#"
				className="main-color text-white py-3 px-6 text-lg rounded-lg hover:bg-teal-500/75"
			>
				Reserve
			</a>
		</div>
	);
};

export default ReturnBook;
