import * as actionTypes from './actions';

const initialState = {
    monthes: [1,2,3,4,5,6,7,8,9,10,11,12],
    days: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    chosenMonth:(new Date()).getMonth(),
    startMonth: (new Date()).getMonth(),
    dayCurrentMonth:29,
    selectedDay:''
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.NEXT_MONTH:
            //Increase the month by one
            return {
                ...state,
                chosenMonth: state.chosenMonth<12? state.chosenMonth+1: state.chosenMonth
            }
        case actionTypes.PREV_MONTH:
            //Go back to previous month
            return {
                ...state,
                chosenMonth: state.chosenMonth>0? state.chosenMonth-1: state.chosenMonth
            }
        case actionTypes.CHOOSE_MONTH:
            //Change month selected
            return {
                ...state,
                chosenMonth: action.month
            }
        case actionTypes.DAYS_IN_MONTH:
        //Get days in a month
            return {
                ...state,
                dayCurrentMonth: state.dayCurrentMonth
            }
        case actionTypes.SELECT_DAY:
            return {
                ...state,
                selectedDay:action.selectedDay
            }
    }
    return state;
};

export default reducer;