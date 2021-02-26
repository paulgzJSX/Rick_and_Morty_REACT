import { put, call, takeLatest, select } from 'redux-saga/effects'
import { fetchData } from '../../api/api'
import { displayLoader, fetchCharacters, hideLoader, reportError } from '../actions/actions'

function* fetchCharactersWorker() {
    try {
        yield put(displayLoader())
        const page = yield select(state => state.pageReducer.page)
        console.log(page);
        const payload = yield call(fetchData, page)

        yield put(fetchCharacters(payload))
        yield put(hideLoader())
    } catch (error) {
        yield put(hideLoader())
        yield put(reportError(error))
    }
}

export function* fetchCharactersWatcher() {
    yield takeLatest('GET_CHARACTERS', fetchCharactersWorker)
}