const initialState = {
    display: false,
    child: null
}

export const backdropReducer = (state = initialState, action) => {
    console.log(state);

    switch (action.type) {
        case 'DISPLAY_BACKDROP':
            return {
                display: true,
                child: action.child
            }
        
        case 'HIDE_BACKDROP':
            return {
                display: false,
                child: null
            }

        default:
            return state
    }
}
