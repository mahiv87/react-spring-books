const Carousel = () => {
	return (
		<div
			className="container flex flex-col w-full mx-auto justify-start items-center"
			style={{ height: 550 }}
		>
			<div className="homepage-carousel-title">
				<h3 className="text-2xl text-neutral-900 pb-4">
					Find your next "I stayed up too late reading" book
				</h3>
			</div>
			<div className="carousel rounded-box w-80">
				<div id="slide1" className="carousel-item relative w-full">
					<img
						src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
						className="w-full"
						alt="Tailwind CSS Carousel component"
					/>
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<a href="#slide7" className="btn btn-circle">
							❮
						</a>
						<a href="#slide2" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide2" className="carousel-item relative w-full">
					<img
						src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
						className="w-full"
						alt="Tailwind CSS Carousel component"
					/>
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<a href="#slide1" className="btn btn-circle">
							❮
						</a>
						<a href="#slide3" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide3" className="carousel-item relative w-full">
					<img
						src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
						className="w-full"
						alt="Tailwind CSS Carousel component"
					/>
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<a href="#slide2" className="btn btn-circle">
							❮
						</a>
						<a href="#slide4" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide4" className="carousel-item relative w-full">
					<img
						src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
						className="w-full"
						alt="Tailwind CSS Carousel component"
					/>
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<a href="#slide3" className="btn btn-circle">
							❮
						</a>
						<a href="#slide5" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide5" className="carousel-item relative w-full">
					<img
						src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
						className="w-full"
						alt="Tailwind CSS Carousel component"
					/>
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<a href="#slide4" className="btn btn-circle">
							❮
						</a>
						<a href="#slide6" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide6" className="carousel-item relative w-full">
					<img
						src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
						className="w-full"
						alt="Tailwind CSS Carousel component"
					/>
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<a href="#slide5" className="btn btn-circle">
							❮
						</a>
						<a href="#slide7" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide7" className="carousel-item relative w-full">
					<img
						src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
						className="w-full"
						alt="Tailwind CSS Carousel component"
					/>
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<a href="#slide6" className="btn btn-circle">
							❮
						</a>
						<a href="#slide1" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
