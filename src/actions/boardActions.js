import * as constants from '../constants';

export const createBoard = (board) => ({
	type: constants.CREATE_BOARD,
	payload: {
		board
	}
});

export const deleteBoard = (id) => ({
	type: constants.DELETE_BOARD,
	payload: {
		id
	}
});

export const updateBoard = (board) => ({
	type: constants.UPDATE_BOARD,
	payload: {
		board
	}
});