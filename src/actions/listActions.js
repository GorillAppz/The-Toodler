import * as constants from '../constants';

export const createList = (list) => ({
	type: constants.CREATE_LIST,
	list
});

export const deleteList = (id) => ({
	type: constants.DELETE_LIST,
	id
});

export const updateList = (list) => ({
	type: constants.UPDATE_LIST,
	list
});