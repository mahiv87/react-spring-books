import { useState } from 'react';
import { BookModel } from '../../../models/BookModel';

const ChangeBooksQty = () => {
	const [books, setBooks] = useState<BookModel[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [booksPerPage] = useState(5);
	const [totalAmountOfBooks, setTotalAmountOfBooks] = useState(0);
	const [totalPages, setTotalPages] = useState(0);

	return <div>ChangeBooksQty</div>;
};

export default ChangeBooksQty;
