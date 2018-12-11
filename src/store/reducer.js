import * as actionTypes from './actions';
import Moment from '../../node_modules/react-moment';

const initialState = {
    monthes: [],
    chosenMonth:0,
    dayCurrentMonth:29
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.NEXT_MONTH:
            return {
                ...state,
                chosenMonth: state.chosenMonth<12? state.chosenMonth+1: state.chosenMonth
            }
        case actionTypes.PREV_MONTH:
            return {
                ...state,
                chosenMonth: state.chosenMonth>0? state.chosenMonth-1: state.chosenMonth
            }
        case actionTypes.CHOOSE_MONTH:
            return {
                ...state,
                chosenMonth: action.month
            }
        case actionTypes.DAYS_IN_MONTH:
            return {
                ...state,
                dayCurrentMonth: state.dayCurrentMonth
            }
    }
    return state;
};

export default reducer;