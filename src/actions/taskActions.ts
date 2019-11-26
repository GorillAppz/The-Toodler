import { ITask } from '../types/interfaces/ITask';
import { AppActions } from '../types/actions';
import * as constants from '../constants';

export const createTask = (task: ITask): AppActions => ({
	type: constants.CREATE_TASK,
	task
});

export const deleteTask = (id: number): AppActions => ({
	type: constants.DELETE_TASK,
	id
});

export const updateTask = (task: ITask): AppActions => ({
	type: constants.UPDATE_TASK,
	task
});

export const moveTask = (taskId: number, listId: number): AppActions => ({
	type: constants.MOVE_TASK,
	taskId,
	listId
})
