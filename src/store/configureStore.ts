import { createStore, combineReducers } from 'redux';
import boardReducer from '../reducers/boardReducer';
import listReducer from '../reducers/listReducer';
import taskReducer from '../reducers/taskReducer';

export const rootReducer = combineReducers({
	boardReducer,
	listReducer,
	taskReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
