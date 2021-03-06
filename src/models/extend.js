import extendActions from './extend/actions';
import extendReducer from './extend/reducer';
import extendSagas from './extend/sagas';
import extendSelectors from './extend/selectors';
import extendTypes from './extend/types';

export const extendModel = (first, second) => ({
	actions: extendActions(first, second),
	reducer: first.reducer && second.reducer ? extendReducer(first, second) : first.reducer || second.reducer,
	sagas: first.sagas && second.sagas ? extendSagas(first, second) : first.sagas || second.sagas,
	selectors: extendSelectors(first, second),
	types: extendTypes(first, second),
});

export default extendModel;
