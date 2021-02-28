import { REPORT_ERROR } from '../actions/actionContants'

const initialState = {
    error: ''
}

export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case REPORT_ERROR:
            return {...state, error: action.error }

        default:
            return state
    }
}