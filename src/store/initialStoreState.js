import { fromJS } from 'immutable';

const initialStoreState = fromJS({
    person: {
        people: [],
        count: 0
    }
});

export default initialStoreState;