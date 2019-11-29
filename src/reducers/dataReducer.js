import * as constants from '../constants';
import data from '../resources/data.json';

const initState = { ...data };

export default (state = initState, action) => {
	const newState = { ...state };
	const { payload, type } = action;
	switch (type) {
		case constants.CREATE_BOARD: {
			const highest = Math.max(...state.boards.map((x) => x.id), null);
			const nextId = highest ? highest + 1 : 1;
			newState.boards = [...newState.boards, { ...payload.board, id: nextId }];
			return newState;
		}
		case constants.DELETE_BOARD: {
			// remove Board
			newState.boards = newState.boards.filter(({ id }) => id !== payload.id);
			// remove lists and tasks associated
			const listIds = newState.lists
				.filter(({ boardId }) => boardId === payload.id)
				.map((x) => x.id);
			// remove tasks
			newState.tasks = newState.tasks.filter(({ listId }) => !listIds.includes(listId));
			// remove lists
			newState.lists = newState.lists.filter(({ boardId }) => boardId !== payload.id);
			return newState;
		}
		case constants.UPDATE_BOARD: {
			newState.boards = newState.boards
				.map((board) => (board.id === payload.board.id ? { ...board, ...payload.board } : board));
			return newState;
		}
		case constants.CREATE_LIST: {
			const highest = Math.max(...state.lists.map((x) => x.id), null);
			const nextId = highest ? highest + 1 : 1;
			newState.lists = [...newState.lists, { ...payload.list, id: nextId }];
			return newState;
		}
		case constants.DELETE_LIST: {
			// delete tasks associatedF
			newState.tasks = newState.tasks.filter(({ listId }) => listId !== payload.id);
			// remove list itself
			newState.lists = newState.lists.filter(({ id }) => id !== payload.id);
			return newState;
		}
		case constants.UPDATE_LIST: {
			newState.lists = newState.lists
				.map((list) => (list.id === payload.list.id ? { ...list, ...payload.list } : list));
			return newState;
		}
		case constants.CREATE_TASK: {
			const highest = Math.max(...state.tasks.map((x) => x.id), null);
			const nextId = highest ? highest + 1 : 1;
			newState.tasks = [...newState.tasks, { ...payload.task, id: nextId }];
			return newState;
		}
		case constants.DELETE_TASK: {
			newState.tasks = newState.tasks.filter(({ id }) => id !== payload.id);
			return newState;
		}
		case constants.UPDATE_TASK: {
			newState.tasks = newState.tasks
				.map((task) => (task.id === payload.task.id ? payload.task : task));
			return newState;
		}
		case constants.MOVE_TASK: {
			newState.tasks = newState.tasks
				.map((task) => (task.id === payload.taskId ? { ...task, listId: payload.listId } : task));
			return state.map((task) => (task.id === payload.taskId ? { ...task, listId: payload.listId } : task));
		}
		default: {
			return state;
		}
	}
};