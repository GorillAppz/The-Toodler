import { IList } from '../types/interfaces/IList';
import { AppActions } from '../types/actions';
import * as constants from '../constants';

export const createList = (list: IList): AppActions => ({
	type: constants.CREATE_LIST,
	list
});

export const deleteList = (id: number): AppActions => ({
	type: constants.DELETE_LIST,
	id
});

export const updateList = (list: IList): AppActions => ({
	type: constants.UPDATE_LIST,
	list
});
