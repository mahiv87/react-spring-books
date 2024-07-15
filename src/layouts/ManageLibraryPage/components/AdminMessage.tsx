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
			<div className="card flex my-5 p-5 container shadow-lg">
				<h4 className="text-xl font-semibold">
					Case #{message.id}:{' '}
					<span className="text-orange-500">{message.title}</span>{' '}
				</h4>
				<div className="mb-2">
					<h5 className="text-lg italic mb-2 indent-2">{message.userEmail}</h5>
					<p className="indent-5">{message.question}</p>
				</div>
				<hr />
				<div className="mt-2">
					<h4 className="text-xl font-semibold">Response: </h4>
					{message.response && message.adminEmail ? (
						<>
							<h6>{message.adminEmail} (admin)</h6>
							<p>{message.response}</p>
						</>
					) : (
						<p className="italic mt-2 indent-2">
							Pending response from administration.
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default AdminMessage;
