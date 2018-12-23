import * as actionTypes from './actions';
import moment from 'moment';
import 'moment/locale/he';

const initialState = {
    dates: [],
    chosenMonth: (moment().locale("he").format("MM")),
    startDay: {
        day: moment().date(),
        month: moment().month(),
        year: moment().year(),
        dayNum:moment().day()
    },
    isOpen: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NEXT_MONTH:
            //Increase the month by one
            return {
                ...state,
                chosenMonth: state.chosenMonth <12 ? state.chosenMonth+1:1
            }
        case actionTypes.PREV_MONTH:
            //Go back to previous month
            return {
                ...state,
                chosenMonth: state.chosenMonth ==1 ? 12:state.chosenMonth-1
            }
        case actionTypes.CHOOSE_MONTH:
            //Change month selected
            console.log(action)
            return {
                ...state,
                chosenMonth: action.month
            }
        case actionTypes.SELECT_DAY:
        console.log(action.selectedDay)
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
                dateObj.push({"id":firstMonth.format("M"),
                              "MonthName": firstMonth.format("MMMM YYYY"),
                              "MonthNum": firstMonth.format("MM"),
                              "Year": firstMonth.format("YYYY"),
                              "daysInMonth":firstMonth.daysInMonth() })
                firstMonth.add(1,'M');
            }
            return {...state,
                dates:dateObj}

    }
    return state;
};

export default reducer;