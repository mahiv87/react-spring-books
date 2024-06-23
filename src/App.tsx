import './App.css';

function App() {
	return (
		// <nav className="flex flex-col lg:flex-row main-color p-3">
		// 	<div className="w-full">
		// 		<span className="text-xl font-semibold mr-4">React Spring Books</span>
		// 		<button
		// 			className="block lg:hidden px-2 py-1 border rounded border-gray-400"
		// 			type="button"
		// 			data-bs-toggle="collapse"
		// 			data-bs-target="#navbarNavDropdown"
		// 			aria-controls="navbarNavDropdown"
		// 			aria-expanded="false"
		// 			aria-label="Toggle Navigation"
		// 		>
		// 			<svg
		// 				className="w-6 h-6"
		// 				fill="none"
		// 				stroke="currentColor"
		// 				viewBox="0 0 24 24"
		// 				xmlns="http://www.w3.org/2000/svg"
		// 			>
		// 				<path
		// 					strokeLinecap="round"
		// 					strokeLinejoin="round"
		// 					strokeWidth="2"
		// 					d="M4 6h16M4 12h16m-7 6h7"
		// 				></path>
		// 			</svg>
		// 		</button>
		// 		<div
		// 			className="hidden w-full lg:flex lg:items-center lg:w-auto"
		// 			id="navbarNavDropdown"
		// 		>
		// 			<ul className="lg:flex lg:flex-row lg:space-x-4">
		// 				<li className="list-none">
		// 					<a href="#" className="list-none">
		// 						Home
		// 					</a>
		// 				</li>
		// 				<li className="list-none">
		// 					<a href="#" className="list-none">
		// 						Search Books
		// 					</a>
		// 				</li>
		// 			</ul>
		// 			<ul className="flex ml-auto">
		// 				<li className="list-none m-1">
		// 					<button className="rounded-lg border border-solid border-neutral-50 p-2">
		// 						Sign in
		// 					</button>
		// 				</li>
		// 			</ul>
		// 		</div>
		// 	</div>
		// </nav>
		<header className="bg-white">
			<div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
				<span className="block text-xl text-teal-600">React Spring Books</span>
				<div className="flex flex-1 items-center justify-end md:justify-between">
					<nav aria-label="Global" className="hidden md:block">
						<ul className="flex items-center gap-6 text-sm">
							<li>
								<a
									className="text-gray-500 transition hover:text-gray-500/75"
									href="#"
								>
									Home
								</a>
							</li>
							<li>
								<a
									className="text-gray-500 transition hover:text-gray-500/75"
									href="#"
								>
									Search Books
								</a>
							</li>
						</ul>
					</nav>

					<div className="flex items-center gap-4">
						<div className="sm:flex sm:gap-4">
							<a
								className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
								href="#"
							>
								Login
							</a>

							<a
								className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
								href="#"
							>
								Register
							</a>
						</div>

						<button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
							<span className="sr-only">Toggle menu</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}

export default App;
