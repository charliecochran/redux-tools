/* eslint max-statements: off, consistent-return: off */
import { call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import retryStrategies from './retryStrategies';

const withRetry = ({ baseDelay = 100, logFailures = true, retryAttempts = 5, retryStrategy = 'exponential' } = {}) => (
	fn,
) =>
	function* wrappedWithRetry(...args) {
		let i = 0;

		while (i < retryAttempts) {
			try {
				const result = yield call(fn, ...args);

				return result;
			} catch (error) {
				i += 1;

				if (logFailures) {
					console.log(error, fn, args);
				}

				if (i === retryAttempts) {
					error.fn = fn.toString();
					throw error;
				}

				yield delay(baseDelay * retryStrategies[retryStrategy](i));
			}
		}
	};

export default withRetry;
