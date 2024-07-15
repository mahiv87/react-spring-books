import { useOktaAuth } from '@okta/okta-react';
import { useState } from 'react';

const ManageLibraryPage = () => {
	const { authState } = useOktaAuth();
	const [changeQtyOfBooksClick, setChangeQtyOfBooksClick] = useState(false);
	const [messagesClick, setMessagesClick] = useState(false);

	return (
		<div className="container mx-auto">
			<div className="mt-3">
				<div role="tablist" className="tabs tabs-lifted tabs-lg ml-4">
					<input
						type="radio"
						name="my_tabs_1"
						role="tab"
						className="tab font-semibold text-main-color [--tab-bg:white] [--tab-border:2px] [--tab-border-color:lightgray]"
						aria-label="Add Book"
						defaultChecked
					/>
					<div role="tabpanel" className="tab-content p-10 ">
						Add new book
					</div>

					<input
						type="radio"
						name="my_tabs_1"
						role="tab"
						className="tab font-semibold text-main-color [--tab-bg:white] [--tab-border:2px] [--tab-border-color:lightgray]"
						aria-label="Change Quantity"
					/>
					<div role="tabpanel" className="tab-content p-10">
						Change quantity
					</div>
				</div>
			</div>
		</div>
	);
};

export default ManageLibraryPage;
