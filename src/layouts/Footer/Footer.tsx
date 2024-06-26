const Footer = () => {
	return (
		<div className="main-color">
			<div className="container flex flex-wrap justify-between items-center mx-auto px-2 py-5 main-color">
				<p className="md:w-1/3 mb-0 text-white">© React Spring Books, Inc</p>
				<ul className="md:w-1/3 flex justify-end">
					<li>
						<a href="#" className="mx-2 px-2 text-white">
							Home
						</a>
					</li>
					<li>
						<a href="#" className="mx-2 px-2 text-white">
							Search Books
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
