import * as constants from '../constants';

const taskInitialState = [];

export default (state = taskInitialState, action) => {
	switch (action.type) {
		case constants.CREATE_TASK: {
			const highest = state.sort((a, b) => ((a.id < b.id) ? 1 : -1))[0].id;
			const nextId = highest ? highest + 1 : 1;
			return [...state, { ...action.task, id: nextId }];
		}
		case constants.DELETE_TASK: {
			return state.filter(({ id }) => id !== action.id);
		}
		case constants.UPDATE_TASK: {
			return state.map((task) => (task.id === action.task.id ? { ...task, ...action.task } : task));
		}
		case constants.MOVE_TASK: {
			return state.map((task) => (task.id === action.taskId ? { ...task, listId: action.listId } : task));
		}
		// Delete tasks items when corresponding board deleted
		case constants.DELETE_BOARD: {
			return state.filter(({ listId }) => {
				const listIds = action.lists.map((list) => list.id);
				return !listIds.includes(listId);
			});
		}
		// Delete task items when corresponding list deleted
		case constants.DELETE_LIST: {
			return state.filter(({ listId }) => listId !== action.id);
		}
		default: {
			return state;
		}
	}
};