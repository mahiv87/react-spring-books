const UsersBooksPage = () => {
	return (
		<div className="container mx-auto">
			<div className="mt-3">
				<div role="tablist" className="tabs tabs-lifted tabs-lg">
					<input
						type="radio"
						name="my_tabs_1"
						role="tab"
						className="tab font-semibold text-main-color [--tab-bg:white] [--tab-border:2px] [--tab-border-color:lightgray]"
						aria-label="Loans"
						defaultChecked
					/>
					<div role="tabpanel" className="tab-content p-10 ">
						<p>Loans</p>
					</div>

					<input
						type="radio"
						name="my_tabs_1"
						role="tab"
						className="tab font-semibold text-main-color [--tab-bg:white] [--tab-border:2px] [--tab-border-color:lightgray]"
						aria-label="Your History"
					/>
					<div role="tabpanel" className="tab-content p-10">
						<p>History</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UsersBooksPage;
