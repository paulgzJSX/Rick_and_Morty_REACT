import { DISPLAY_LOADER, HIDE_LOADER } from '../actions/actionContants'

const initialState = {
    isLoading: false
}

export const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_LOADER:
            return { ...state, isLoading: true }

        case HIDE_LOADER:
            return { ...state, isLoading: false }

        default:
            return state
    }
}