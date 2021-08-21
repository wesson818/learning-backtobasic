import { useEffect } from 'react'

export const useDocTitle = (count) => {
    useEffect(() => {
        document.title = `Count - ${count}`
    }, [count])
}
