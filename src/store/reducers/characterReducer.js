const initialState = {
    characters: []
}

export const charactersReducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case 'FETCH_CHARACTERS':
            return {
                ...state,
                characters: [...state.characters, ...action.results]
            }

        default:
            return state
    }
}