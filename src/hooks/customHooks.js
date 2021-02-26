import { useEffect, useCallback } from 'react'
import { moveToNextPage } from '../store/actions/actions'

export const useInfiniteScroll = (scrollRef, dispatch) => {
    const scrollObserver = useCallback(
        node => {
            new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio > 0) {
                        dispatch(moveToNextPage())
                    }
                })
            }).observe(node)
        }, [dispatch]
    )

    useEffect(() => {
        if (scrollRef.current) {
            scrollObserver(scrollRef.current)
        }
    }, [scrollObserver, scrollRef])
}