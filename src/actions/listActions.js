import * as constants from '../constants';

export const createList = (list) => ({
	type: constants.CREATE_LIST,
	payload: {
		list
	}
});

export const deleteList = (id) => ({
	type: constants.DELETE_LIST,
	payload: {
		id
	}
});

export const updateList = (list) => ({
	type: constants.UPDATE_LIST,
	payload: {
		list
	}
});