/* Centralized PropTypes Declaration */
import PropTypes from 'prop-types';

const { shape, number, string, bool, arrayOf, func } = PropTypes;

export const boardType = shape({
	id: number.isRequired,
	name: string.isRequired,
	thumbnailPhoto: string.isRequired
});

export const boardsType = arrayOf(
	boardType
);

export const listType = shape({
	id: number.isRequired,
	name: string.isRequired,
	color: string.isRequired,
	boardId: number.isRequired
});

export const listsType = arrayOf(
	listType
);

export const taskType = shape({
	id: number.isRequired,
	name: string.isRequired,
	description: string.isRequired,
	isFinished: bool.isRequired,
	listId: number.isRequired
});

export const tasksType = arrayOf(
	taskType
);

export const deleteBoardType = func;
export const deleteListType = func;
export const deleteTaskType = func;

export const updateBoardType = func;
export const updateListType = func;
export const updateTaskType = func;

export const createBoardType = func;
export const createListType = func;
export const createTaskType = func;

export const moveTaskType = func;
export const updateIsFinishedType = func;

export const submitHandlerType = func;
export const cancelHandlerType = func;
export const isVisibleType = bool;

export const stringType = string;
export const numberType = number;
export const funcType = func;
export const boolType = bool;