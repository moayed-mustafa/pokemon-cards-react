import { useState } from 'react'
import axios from 'axios'
import uuid from "uuid";


const useAxios = (url, initial_state,) => {
    // create a state

    const [state, setState] = useState(initial_state)

    // create a function to change the state
    const fetchDataAndChangeState = async (name="") => {
        // fetch the data
        try {
            const res = await axios.get(`${url}/${name}`)
            // change the state
            setState(data => [
                ...data,
                {...res.data, id: uuid()}

            ])

        } catch (e) {
            console.log(e)
        }


    }
    // return refactored list
    return [state, fetchDataAndChangeState]



}

export default useAxios