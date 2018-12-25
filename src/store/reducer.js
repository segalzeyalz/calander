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
    lastMonth: (moment().add(11, 'M').locale("he").format("MM")),
    isOpen: true,
    isLastMonth: false,
    isStartMonth: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NEXT_MONTH:
            //Increase the month by one
            let newChosenMonth;
            let nextIsLastMonth=false;
            if(state.lastMonth==state.chosenMonth){
                newChosenMonth = state.chosenMonth
                nextIsLastMonth=true;
            }else{
                if(state.lastMonth-1==state.chosenMonth){
                    nextIsLastMonth=true;
                }
                if(state.chosenMonth==12){
                    newChosenMonth=1
                }else{
                    newChosenMonth = state.chosenMonth+1
                }
            }
            return {
                ...state,
                isStartMonth:false,
                isLastMonth:nextIsLastMonth,
                chosenMonth: newChosenMonth
            }
        case actionTypes.PREV_MONTH:
            //Go back to previous month
            //Increase the month by one
            let newChosenMonthBack;
            let isStartMonthPrev = false;
            if(state.startDay.month+1==state.chosenMonth){
                newChosenMonthBack = state.chosenMonth;
                isStartMonthPrev=true;
            }else{
                if(state.chosenMonth==1){
                    newChosenMonthBack=12
                }else{
                    newChosenMonthBack = state.chosenMonth-1
                }
            }
            return {
                ...state,
                chosenMonth: newChosenMonthBack,
                isStartMonth:isStartMonthPrev,
                isLastMonth:false
            }
        case actionTypes.CHOOSE_MONTH:
            //Change month selected
            let isLastMonth=false;
            let isStartMonth = false;
            if(action.month==state.lastMonth){
                isLastMonth=true;
            }
            if(state.startDay.month+1==action.month){
                isStartMonth=true;
            }
            return {
                ...state,
                chosenMonth: action.month,
                isLastMonth:isLastMonth,
                isStartMonth:isStartMonth
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