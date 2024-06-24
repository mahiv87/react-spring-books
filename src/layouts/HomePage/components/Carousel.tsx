import bookSlide from './../../../Images/BooksImages/book-luv2code-1000.png';

const Carousel = () => {
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
			<div className="carousel rounded-box w-80">
				<div
					id="slide1"
					className="carousel-item relative w-full flex-col justify-center items-center"
				>
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
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between text-center">
						<a
							href="#slide7"
							className="w-10 border border-accent text-accent hover:text-white hover:bg-teal-500 rounded-lg"
						>
							❮
						</a>
						<a
							href="#slide2"
							className="w-10 border border-accent text-accent hover:text-white hover:bg-teal-500 rounded-lg"
						>
							❯
						</a>
					</div>
				</div>
				<div
					id="slide2"
					className="carousel-item relative w-full flex-col justify-center items-center"
				>
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
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between text-center">
						<a
							href="#slide1"
							className="w-10 border border-accent text-accent hover:text-white hover:bg-teal-500 rounded-lg"
						>
							❮
						</a>
						<a
							href="#slide3"
							className="w-10 border border-accent text-accent hover:text-white hover:bg-teal-500 rounded-lg"
						>
							❯
						</a>
					</div>
				</div>
				<div
					id="slide3"
					className="carousel-item relative w-full flex-col justify-center items-center"
				>
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
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between text-center">
						<a
							href="#slide2"
							className="w-10 border border-accent text-accent hover:text-white hover:bg-teal-500 rounded-lg"
						>
							❮
						</a>
						<a
							href="#slide4"
							className="w-10 border border-accent text-accent hover:text-white hover:bg-teal-500 rounded-lg"
						>
							❯
						</a>
					</div>
				</div>
				<div
					id="slide4"
					className="carousel-item relative w-full flex-col justify-center items-center"
				>
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
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between text-center">
						<a
							href="#slide3"
							className="w-10 border border-accent text-accent hover:text-white hover:bg-teal-500 rounded-lg"
						>
							❮
						</a>
						<a
							href="#slide5"
							className="w-10 border border-accent text-accent hover:text-white hover:bg-teal-500 rounded-lg"
						>
							❯
						</a>
					</div>
				</div>
				<div
					id="slide5"
					className="carousel-item relative w-full flex-col justify-center items-center"
				>
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
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between text-center">
						<a
							href="#slide4"
							className="w-10 border border-accent text-accent hover:text-white hover:bg-teal-500 rounded-lg"
						>
							❮
						</a>
						<a
							href="#slide6"
							className="w-10 border border-accent text-accent hover:text-white hover:bg-teal-500 rounded-lg"
						>
							❯
						</a>
					</div>
				</div>
				<div
					id="slide6"
					className="carousel-item relative w-full flex-col justify-center items-center"
				>
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
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between text-center">
						<a
							href="#slide5"
							className="w-10 border border-accent text-accent hover:text-white hover:bg-teal-500 rounded-lg"
						>
							❮
						</a>
						<a
							href="#slide7"
							className="w-10 border border-accent text-accent hover:text-white hover:bg-teal-500 rounded-lg"
						>
							❯
						</a>
					</div>
				</div>
				<div
					id="slide7"
					className="carousel-item relative w-full flex-col justify-center items-center"
				>
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
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between text-center">
						<a
							href="#slide6"
							className="w-10 border border-accent text-accent hover:text-white hover:bg-teal-500 rounded-lg"
						>
							❮
						</a>
						<a
							href="#slide1"
							className="w-10 border border-accent text-accent hover:text-white hover:bg-teal-500 rounded-lg"
						>
							❯
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
