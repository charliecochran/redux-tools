import { call } from 'redux-saga/effects';

const withErrorReporting = (fn) =>
	function* wrappedWithErrorReporting(...args) {
		try {
			const result = yield call(fn, ...args);

			return result;
		} catch (error) {
			console.log(error);
			throw error;
		}
	};

export default withErrorReporting;
