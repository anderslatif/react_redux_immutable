import PersonConstants from '../constants/PersonConstants';
import initialStoreState from '../store/initialStoreState.js';

export default function userReducer(state = initialStoreState.get('person'), action) {
    switch (action.type) {
        case PersonConstants.ADD_PERSON:
            return state;
        case PersonConstants.REMOVE_PERSON:
            return state;
        default:
            return state;
    }
}
