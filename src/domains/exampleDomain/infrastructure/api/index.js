import { authHeader, handleResponse } from '@vecindario/suite-library';

export const getServiceExample = () => {
	const requestOptions = {
		method: 'GET',
		headers: authHeader(),
	};
	return fetch('endpoint', requestOptions).then(handleResponse);
};

export default { getServiceExample };
