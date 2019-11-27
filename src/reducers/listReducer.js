import * as constants from '../constants';

const listInitialState = [];

export default (state = listInitialState, action) => {
	switch (action.type) {
		case constants.CREATE_LIST: {
			const highest = state.sort((a, b) => ((a.id < b.id) ? 1 : -1))[0].id;
			const nextId = highest ? highest + 1 : 1;
			return [...state, { ...action.list, id: nextId }];
		}
		case constants.DELETE_LIST: {
			return state.filter(({ id }) => id !== action.id);
		}
		case constants.UPDATE_LIST: {
			return state.map((list) => (list.id === action.list.id ? { ...list, ...action.list } : list));
		}
		// Delete list items when corresponding board deleted
		case constants.DELETE_BOARD: {
			return state.filter(({ boardId }) => boardId !== action.id);
		}
		default: {
			return state;
		}
	}
};