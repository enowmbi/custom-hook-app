import { useState, useEffect } from 'react'
import api from '../api/jokes'

const useDadJokesWithAxios = () =>{
    const [joke, setJoke] = useState("")

    useEffect(()=>{
        const fetchJokes = async () =>{
            const response = await api.get('/', {
                      headers: { Accept: "application/json" },
                    });
            setJoke(response.data.joke)
        }

        fetchJokes()
    }, [])

    return [joke]
}

export default useDadJokesWithAxios
