import taskReducers from './taskReducer';
import goalReducers from './goalReducer';
import archiveReducers from './archiveReducer';

import { combineReducers } from 'redux';

export default combineReducers({ taskReducers, goalReducers, archiveReducers });