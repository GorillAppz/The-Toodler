import * as constants from '../../constants';
import { IBoard } from '../interfaces/IBoard';
import { IList } from '../interfaces/IList';

export interface CreateBoard {
	type: typeof constants.CREATE_BOARD;
	board: IBoard;
}

export interface DeleteBoard {
	type: typeof constants.DELETE_BOARD;
	id: number;
	lists: IList[];
}

export interface UpdateBoard {
	type: typeof constants.UPDATE_BOARD;
	board: IBoard;
}

export type BoardActionTypes = CreateBoard | DeleteBoard | UpdateBoard;
