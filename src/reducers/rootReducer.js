import { combineReducers } from 'redux-immutable';
import personReducer from './personReducer';

const rootReducer = combineReducers({
    person: personReducer,
});

export default rootReducer;
