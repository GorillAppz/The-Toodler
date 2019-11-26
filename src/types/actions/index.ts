import { BoardActionTypes } from './boardActions';
import { ListActionTypes } from './listActions';
import { TaskActionTypes } from './taskActions';


export type AppActions = BoardActionTypes | ListActionTypes | TaskActionTypes;
