/* eslint consistent-return:off */
import { call, put } from 'redux-saga/effects';
import actions from './actions';

const safely = (fn) =>
	function* wrappedSafely(...args) {
		try {
			const result = yield call(fn, ...args);

			return result;
		} catch (error) {
			// compose withErrorReporting for logging
			yield put(
				actions.safelyFailure({
					args,
					error,
				}),
			);
		}
	};

export default safely;
