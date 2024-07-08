import { useState } from 'react';

const UsersBooksPage = () => {
	return (
		<div className="container mx-auto">
			<div className="mt-3">
				<div role="tablist" className="tabs tabs-bordered">
					<input
						type="radio"
						name="my_tabs_1"
						role="tab"
						className="tab"
						aria-label="Tab 1"
					/>
					<div role="tabpanel" className="tab-content p-10">
						Tab content 1
					</div>

					<input
						type="radio"
						name="my_tabs_1"
						role="tab"
						className="tab"
						aria-label="Tab 2"
						defaultChecked
					/>
					<div role="tabpanel" className="tab-content p-10">
						Tab content 2
					</div>
				</div>
			</div>
		</div>
	);
};

export default UsersBooksPage;
