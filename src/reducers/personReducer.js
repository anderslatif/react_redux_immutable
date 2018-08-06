import * as PersonConstants from '../constants/PersonConstants';
import initialStoreState from '../store/initialStoreState.js';

export default function userReducer(state = initialStoreState.get('person'), action) {
    switch (action.type) {
        case PersonConstants.ADD_PERSON: {
            let people = state.get('people').toJS();
            people.push(action.person);
            let count = state.get('count');

            return state.merge({
                people,
                count: ++count
            });
        }
        case PersonConstants.REMOVE_PERSON: {
            let people = state.get('people').toJS();
            let count = state.get('count');
            people.pop();

            return state.merge({
                people,
                count: --count
            });
        }
        default:
            return state;
    }
}
