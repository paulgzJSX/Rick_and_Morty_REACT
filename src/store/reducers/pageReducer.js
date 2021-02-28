import { NEXT_PAGE } from '../actions/actionContants'

const initialState = {
    page: 1
}

export const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_PAGE:
            return {...state, page: state.page + 1 }

        default:
            return state
    }
}