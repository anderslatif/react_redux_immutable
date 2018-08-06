import * as PersonConstants from '../constants/PersonConstants';


export function addPerson(person) {
    return async (dispatch, getState, {cookies}) => {
        dispatch({
                type: PersonConstants.ADD_PERSON,
                person: person
        });
    };
}

export function removePerson() {
    return async (dispatch, getState, {cookies}) => {
        dispatch({
            type: PersonConstants.REMOVE_PERSON,
        });
    };
}