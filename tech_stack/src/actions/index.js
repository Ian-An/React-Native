export const selectLibrary = (libraryId) => {
	return {
		type: 'select_libray',
		payload: libraryId
	};
};

