import { call, take } from 'redux-saga/effects';

const takeOne = function* takeOne(pattern, saga, ...args) {
	const action = yield take(pattern);

	yield call(saga, ...args.concat(action));
};

export default takeOne;
