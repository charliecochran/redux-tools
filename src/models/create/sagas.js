import { fork } from 'redux-saga/effects';

const createSagas = (models) =>
	function* sagas() {
		for (const key in models) {
			if (models[key].sagas) {
				yield fork(models[key].sagas);
			}
		}
	};

export default createSagas;
