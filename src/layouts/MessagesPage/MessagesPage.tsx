import { useState } from 'react';

export const MessagesPage = () => {
	const [messagesClick, setMessagesClick] = useState(false);

	return (
		<div className="container mx-auto">
			<div className="mt-3">
				<div role="tablist" className="tabs tabs-lifted tabs-lg">
					<input
						onClick={() => setMessagesClick(false)}
						type="radio"
						name="my_tabs_1"
						role="tab"
						className="tab font-semibold text-main-color [--tab-bg:white] [--tab-border:2px] [--tab-border-color:lightgray]"
						aria-label="Loans"
						defaultChecked
					/>
					<div role="tabpanel" className="tab-content p-10 ">
						Submit Question
					</div>

					<input
						onClick={() => setMessagesClick(true)}
						type="radio"
						name="my_tabs_1"
						role="tab"
						className="tab font-semibold text-main-color [--tab-bg:white] [--tab-border:2px] [--tab-border-color:lightgray]"
						aria-label="History"
					/>
					<div role="tabpanel" className="tab-content p-10">
						Pending
					</div>
				</div>
			</div>
		</div>
	);
};
