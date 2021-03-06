const createActions = (models) =>
	Object.keys(models).reduce((accumulator, key) => {
		if (models[key].actions) {
			accumulator[key] = models[key].actions;
		}

		return accumulator;
	}, {});

export default createActions;
