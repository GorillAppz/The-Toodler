import * as constants from '../../constants';
import { ITask } from '../interfaces/ITask';

export interface CreateTask {
	type: typeof constants.CREATE_TASK;
	task: ITask;
}

export interface DeleteTask {
	type: typeof constants.DELETE_TASK;
	id: number;
}

export interface UpdateTask {
	type: typeof constants.UPDATE_TASK;
	task: ITask;
}

export interface MoveTask {
	type: typeof constants.MOVE_TASK;
	taskId: number;
	listId: number;
}

export type TaskActionTypes = CreateTask | DeleteTask | UpdateTask | MoveTask;
