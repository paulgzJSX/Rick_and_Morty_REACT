export const displayLoader = () => {
    return { type: 'DISPLAY_LOADER' }
}

export const hideLoader = () => {
    return { type: 'HIDE_LOADER' }
}

export const fetchCharacters = results => {
    return { type: 'FETCH_CHARACTERS', results }
}

export const getCharacters = () => {
    return { type: 'GET_CHARACTERS' }
}

export const moveToNextPage = () => {
    return { type: 'NEXT_PAGE' }
}

export const reportError = error => {
    return { type: 'REPORT_ERROR', error }
}

export const hideBackdrop = () => {
    return { type: 'HIDE_BACKDROP' }
}

export const displayBackdrop = child => {
    return {
        type: 'DISPLAY_BACKDROP',
        child
    }
}