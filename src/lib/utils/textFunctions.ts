export const stringToKebabCase = (str?: string) => {
	if (!str) {
		return '';
	}

	return str
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.replace(/[\s_]+/g, '-')
		.toLowerCase();
};
