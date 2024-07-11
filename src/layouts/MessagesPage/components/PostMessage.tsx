import { useOktaAuth } from '@okta/okta-react';
import { useState } from 'react';

export const PostMessage = () => {
	const { authState } = useOktaAuth();
	const [title, setTitle] = useState('');
	const [question, setQuestion] = useState('');
	const [displayWarning, setDisplayWarning] = useState(false);
	const [displaySuccess, setDisplaySuccess] = useState(false);

	return (
		<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-lg text-center">
				<h1 className="text-2xl font-bold sm:text-3xl">
					Ask our team a question!
				</h1>
			</div>

			<form method="POST" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
				{displayWarning && (
					<div
						className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
						role="alert"
					>
						All fields must be filled out
					</div>
				)}
				{displaySuccess && (
					<div
						className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
						role="alert"
					>
						Question successfully submitted
					</div>
				)}

				<div>
					<label htmlFor="title" className="sr-only">
						Title
					</label>

					<div className="relative">
						<input
							type="text"
							className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
							placeholder="Title"
							onChange={(e) => setTitle(e.target.value)}
							value={title}
						/>
					</div>
				</div>

				<div>
					<label htmlFor="question" className="sr-only">
						Question
					</label>

					<div className="overflow-hidden">
						<textarea
							id="question"
							className="w-full resize-none border-x-0 border-t-0 border-gray-200 px-0 align-top sm:text-sm"
							rows={4}
							placeholder="Enter question or message here..."
							onChange={(e) => setQuestion(e.target.value)}
							value={question}
						></textarea>

						<div className="flex items-center justify-end gap-2 py-3">
							<button
								type="button"
								className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
								onClick={() => setQuestion('')}
							>
								Clear
							</button>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-between">
					<button
						type="submit"
						className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};
