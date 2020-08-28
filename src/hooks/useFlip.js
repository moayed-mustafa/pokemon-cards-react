import { useState } from 'react'

const useFlip = (initial_state) => {
    // create a state

    const [state, setState] = useState(initial_state)

    // create a function to change the state
    const changeState = () => {
        setState((state) => state = !state)
    }

    // return a refactored list of the state and the function to change it
    return [state, changeState]

}

export default useFlip