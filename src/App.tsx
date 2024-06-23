import './App.css';

function App() {
	return (
		<nav className="flex flex-col lg:flex-row main-color py-3">
			<div className="w-full">
				<span className="text-lg font-semibold mr-4">React Spring Books</span>
				<button
					className="block lg:hidden px-2 py-1 border rounded border-gray-400"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle Navigation"
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16m-7 6h7"
						></path>
					</svg>
				</button>
			</div>
		</nav>
	);
}

export default App;
