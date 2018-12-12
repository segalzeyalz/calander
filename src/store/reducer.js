import * as actionTypes from './actions';
import moment from 'moment';
import 'moment/locale/he';

const initialState = {
    dates: [],
    chosenMonth: (moment().locale("he").format("M")),
    startMonth: (new Date()).getMonth(),
    startDay: (new Date()).getDate(),
    isOpen: true,
    selectedDay: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NEXT_MONTH:
            //Increase the month by one
            return {
                ...state,
                chosenMonth: state.chosenMonth < 12 ? state.chosenMonth + 1 : state.chosenMonth
            }
        case actionTypes.PREV_MONTH:
            //Go back to previous month
            return {
                ...state,
                chosenMonth: state.chosenMonth > 0 ? state.chosenMonth - 1 : state.chosenMonth
            }
        case actionTypes.CHOOSE_MONTH:
            //Change month selected
            return {
                ...state,
                chosenMonth: action.month
            }
        case actionTypes.SELECT_DAY:
            return {
                ...state,
                selectedDay: action.selectedDay
            }
        case actionTypes.CLOSE_CALANDER:
            return {
                ...state,
                isOpen: false
            }
        case actionTypes.UPDATE_DATES:
            let dateObj = [];
            let firstMonth = moment().locale("he")
            for(let i=0; i<12; i++){
                dateObj.push({"id":firstMonth.format("M"),"Month": firstMonth.format("MMMM YYYY"),daysInMonth:firstMonth.daysInMonth()})
                firstMonth.add(1,'M')
            }
            return {...state,
                dates:dateObj}
        case actionTypes.GET_MONTHES:
            let {dayCurrentMonth} = state;
            var days = []
            for (let i = 0; i < dayCurrentMonth; i++) {
                days.push(i)
            }
            return {
                ...state,
            }
    }
    return state;
};

export default reducer;