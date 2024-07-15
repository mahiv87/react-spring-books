import { useState } from 'react';
import { MessageModel } from '../../../models/MessageModel';

const AdminMessage: React.FC<{ message: MessageModel }> = (
	{ message },
	key
) => {
	const [displayWarning, setDisplayWarning] = useState(false);
	const [response, setResponse] = useState('');

	return (
		<div key={message.id}>
			<div className="card flex mx-auto my-5 p-5 container lg:w-7/12 shadow-lg">
				<h4 className="text-xl font-semibold">
					Case #{message.id}:{' '}
					<span className="text-orange-500">{message.title}</span>{' '}
				</h4>
				<div className="my-4">
					<h5 className="text-lg italic mb-2 indent-2">{message.userEmail}</h5>
					<p className="indent-5">{message.question}</p>
				</div>
				<hr />
				<div className=" mt-2">
					<h4 className="text-xl font-semibold">Response: </h4>

					<form
						method="PUT"
						className="mx-auto mb-0 mt-8 md:max-w-5xl space-y-4"
					>
						{displayWarning && (
							<div
								className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
								role="alert"
							>
								All fields must be filled out
							</div>
						)}

						<div>
							<label htmlFor="description" className="sr-only">
								Description
							</label>

							<div className="overflow-hidden">
								<textarea
									id="description"
									className="w-full resize-none border-x-0 border-t-0 bg-gray-200 border-gray-200 text-black p-4 align-top sm:text-sm"
									rows={4}
									placeholder="Enter response here.."
									onChange={(e) => setResponse(e.target.value)}
									value={response}
								></textarea>

								<div className="flex items-center justify-end gap-2 py-3">
									<button
										type="button"
										className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
									>
										Clear
									</button>
								</div>
							</div>
						</div>

						<div className="flex items-center justify-center">
							<button
								type="submit"
								className="inline-block w-full btn border-teal-500 bg-teal-500 hover:bg-teal-500/80 hover:border-teal-500/80 text-white"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AdminMessage;
