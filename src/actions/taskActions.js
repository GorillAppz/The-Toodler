import * as constants from '../constants';

export const createTask = (task) => ({
	type: constants.CREATE_TASK,
	task
});

export const deleteTask = (id) => ({
	type: constants.DELETE_TASK,
	id
});

export const updateTask = (task) => ({
	type: constants.UPDATE_TASK,
	task
});

export const moveTask = (taskId, listId) => ({
	type: constants.MOVE_TASK,
	taskId,
	listId
});