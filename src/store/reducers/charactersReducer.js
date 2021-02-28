import { FETCH_CHARACTERS } from '../actions/actionContants'

const initialState = {
    characters: []
}

export const charactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHARACTERS:
            return {
                ...state,
                characters: [...state.characters, ...action.results]
            }

        default:
            return state
    }
}