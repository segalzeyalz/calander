import * as actionTypes from './actions';

const initialState = {
    monthes: [],
    chosenMonth:"July"
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.NEXT_MONTH:
            return {
                ...state,
                chosenMonth: state.monthes[state.monthes.findIndex("functionThatFindMonthHere")+1]
            }
    }
    return state;
};

export default reducer;