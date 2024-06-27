/* eslint-disable @typescript-eslint/no-explicit-any */
const Pagination: React.FC<{
	currentPage: number;
	totalPages: number;
	paginate: any;
}> = ({ currentPage, totalPages, paginate }) => {
	const pageNumbers = [];
	const range = 2;

	const startPage = Math.max(1, currentPage - range);
	const endPage = Math.min(totalPages, currentPage + range);

	for (let i = startPage; i <= endPage; i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<div>Pagination</div>
		</nav>
	);
};

export default Pagination;
