import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { hideBackdrop } from '../store/actions/actionCreators'

export const useClickOutside = ref => {
    const dispatch = useDispatch()

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    })

    const handleClickOutside = e => {
        if (ref.current && !ref.current.contains(e.target)) {
            dispatch(hideBackdrop())
        }
    }
}