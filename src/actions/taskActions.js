import * as constants from '../constants';

export const createTask = (task) => ({
	type: constants.CREATE_TASK,
	payload: {
		task
	}
});

export const deleteTask = (id) => ({
	type: constants.DELETE_TASK,
	payload: {
		id
	}
});

export const updateTask = (task) => ({
	type: constants.UPDATE_TASK,
	payload: {
		task
	}
});

export const moveTask = (taskId, listId) => ({
	type: constants.MOVE_TASK,
	payload: {
		taskId,
		listId
	}
});