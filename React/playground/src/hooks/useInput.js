import { useState } from 'react'

export const useInput = (initialState) => {
    const [value, setValue] = useState(initialState)

    const reset = () => {
        setValue(initialState)
    }

    const bind = {
        value,
        onChange: e => setValue(e.target.value)
    }

    return [value, bind, reset]
}
