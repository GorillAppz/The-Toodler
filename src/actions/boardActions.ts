import { IBoard } from '../types/interfaces/IBoard';
import { IList } from '../types/interfaces/IList';
import { AppActions } from '../types/actions';
import * as constants from '../constants';

export const createBoard = (board: IBoard): AppActions => ({
	type: constants.CREATE_BOARD,
	board
});

export const deleteBoard = (id: number, lists: IList[]): AppActions => ({
	type: constants.DELETE_BOARD,
	id,
	lists
});

export const updateBoard = (board: IBoard): AppActions => ({
	type: constants.UPDATE_BOARD,
	board
});
