import * as constants from '../../constants';
import { IList } from '../interfaces/IList';

export interface CreateList {
	type: typeof constants.CREATE_LIST;
	list: IList;
}

export interface DeleteList {
	type: typeof constants.DELETE_LIST;
	id: number;
}

export interface UpdateList {
	type: typeof constants.UPDATE_LIST;
	list: IList;
}

export type ListActionTypes = CreateList | DeleteList | UpdateList;
