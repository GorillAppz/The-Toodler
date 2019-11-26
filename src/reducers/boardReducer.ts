import { IBoard } from '../types/interfaces/IBoard';
import { BoardActionTypes } from '../types/actions/boardActions';
import * as constants from '../constants';

const boardInitialState: IBoard[] = [];

export default (state = boardInitialState, action: BoardActionTypes): IBoard[] => {
	switch(action.type) {
		case constants.CREATE_BOARD:
			const highest = state.sort((a, b) => (a.id < b.id) ? 1 : -1)[0].id;
			const nextId = highest ? highest + 1 : 1;
			return [...state, {...action.board, id: nextId }];
		case constants.DELETE_BOARD:
			return state.filter(({ id }) => id != action.id);
		case constants.UPDATE_BOARD:
			return state.map(board => { return board.id == action.board.id ? { ...board, ...action.board } : board });
		default:
			return state;
	}
}
