import { useEffect, useState } from 'react';
import { BookModel } from '../../../models/BookModel';
import { useOktaAuth } from '@okta/okta-react';

const ChangeBook: React.FC<{ book: BookModel }> = ({ book }) => {
	const { authState } = useOktaAuth();

	const [qty, setQty] = useState<number>(0);
	const [remaining, setRemaining] = useState<number>(0);

	useEffect(() => {
		setQty(book.copies || 0);
		setRemaining(book.copiesAvailable || 0);
	}, [book.copies, book.copiesAvailable]);

	return (
		<>
			<div>ChangeBook</div>
		</>
	);
};

export default ChangeBook;
