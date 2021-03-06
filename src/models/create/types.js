const createTypes = (models) =>
	Object.keys(models).reduce((accumulator, key) => {
		if (models[key].types) {
			accumulator[key] = models[key].types;
		}

		return accumulator;
	}, {});

export default createTypes;
