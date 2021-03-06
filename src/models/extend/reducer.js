const extendReducer = (first, second) => (state, action) => second.reducer(first.reducer(state, action), action);

export default extendReducer;
