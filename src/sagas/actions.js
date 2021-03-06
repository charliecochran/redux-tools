import types from './types';

const actions = {
	safelyFailure: (payload) => ({
		payload,
		type: types.SAFELY_FAILURE,
	}),
};

export default actions;
