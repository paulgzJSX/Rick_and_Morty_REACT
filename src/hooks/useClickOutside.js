import { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { hideBackdrop } from '../store/actions/actions'

export const useClickOutside = ref => {
    const dispatch = useDispatch()

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleClickOutside = useCallback(e => {
        if (ref.current && !ref.current.contains(e.target)) {
            dispatch(hideBackdrop())
        }
    }, [])
}