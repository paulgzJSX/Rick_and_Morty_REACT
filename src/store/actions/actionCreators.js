import * as actions from './actionContants'

export const displayLoader = () => {
    return { type: actions.DISPLAY_LOADER }
}

export const hideLoader = () => {
    return { type: actions.HIDE_LOADER }
}

export const fetchCharacters = results => {
    return { type: actions.FETCH_CHARACTERS, results }
}

export const getCharacters = () => {
    return { type: actions.GET_CHARACTERS }
}

export const moveToNextPage = () => {
    return { type: actions.NEXT_PAGE }
}

export const reportError = error => {
    return { type: actions.REPORT_ERROR, error }
}

export const displayBackdrop = child => {
    return { type: actions.DISPLAY_BACKDROP, child }
}

export const hideBackdrop = () => {
    return { type: actions.HIDE_BACKDROP }
}

