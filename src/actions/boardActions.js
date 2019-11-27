import * as constants from '../constants';

export const createBoard = (board) => ({
	type: constants.CREATE_BOARD,
	board
});

export const deleteBoard = (id, lists) => ({
	type: constants.DELETE_BOARD,
	id,
	lists
});

export const updateBoard = (board) => ({
	type: constants.UPDATE_BOARD,
	board
});