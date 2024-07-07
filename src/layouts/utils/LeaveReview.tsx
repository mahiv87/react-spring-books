import { useState } from 'react';
import StarRating from './StarRating';

const LeaveReview: React.FC<{}> = () => {
	const [starInput, setStarInput] = useState(0);

	const starValue = (value: number) => {
		setStarInput(value);
	};

	return (
		<>
			<details className="dropdown mb-2">
				<summary className="w-full btn border-teal-500 bg-teal-500 hover:bg-teal-500/80 hover:border-teal-500/80 text-white text-lg">
					Leave a review?
				</summary>
				<ul
					id="submitReviewRating"
					className="menu dropdown-content bg-gray-100 rounded-lg z-[1] w-52 p-2 absolute left-1/2 transform -translate-x-1/2 shadow-lg"
				>
					<li onClick={() => starValue(0)}>
						<p>0</p>
					</li>
					<li onClick={() => starValue(0.5)}>
						<p>0.5</p>
					</li>
					<li onClick={() => starValue(1)}>
						<p>1</p>
					</li>
					<li onClick={() => starValue(1.5)}>
						<p>1.5</p>
					</li>
					<li onClick={() => starValue(2)}>
						<p>2</p>
					</li>
					<li onClick={() => starValue(2.5)}>
						<p>2.5</p>
					</li>
					<li onClick={() => starValue(3)}>
						<p>3</p>
					</li>
					<li onClick={() => starValue(3.5)}>
						<p>3.5</p>
					</li>
					<li onClick={() => starValue(4)}>
						<p>4</p>
					</li>
					<li onClick={() => starValue(4.5)}>
						<p>4.5</p>
					</li>
					<li onClick={() => starValue(5)}>
						<p>5</p>
					</li>
				</ul>
			</details>
			<StarRating rating={starInput} />
		</>
	);
};

export default LeaveReview;
