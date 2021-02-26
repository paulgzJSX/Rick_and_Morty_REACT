const initialState = {
    characters: [],
    isLoading: false
}

export const charactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CHARACTERS':
            return {
                ...state,
                characters: [...state.characters, ...action.results]
            }
    
        case 'DISPLAY_LOADER':
            return { ...state, isLoading: true }

        case 'HIDE_LOADER':
            return { ...state, isLoading: false }

        default:
            return state
    }
}