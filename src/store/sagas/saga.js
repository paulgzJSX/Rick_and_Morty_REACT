import { put, call, takeLatest, select } from 'redux-saga/effects'
import { fetchData } from '../../api/api'
import { displayLoader, fetchCharacters, hideLoader, reportError } from '../actions/actionCreators'

function* fetchCharactersWorker() {
    try {
        const page = yield select(state => state.pageReducer.page)
        if (page === 1) yield put(displayLoader())
        const payload = yield call(fetchData, page)
        yield put(fetchCharacters(payload))
        if (page === 1) yield put(hideLoader())
        
    } catch (error) {
        yield put(hideLoader())
        yield put(reportError(error))
    }
}

export function* fetchCharactersWatcher() {
    yield takeLatest('GET_CHARACTERS', fetchCharactersWorker)
}