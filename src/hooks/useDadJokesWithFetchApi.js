import { useState, useEffect } from 'react'

const useDadJokesWithFetchApi = () =>{
    const [joke, setJoke] = useState("")

    useEffect(()=>{
        const fetchJokes = async () =>{
            const response = await fetch('https://icanhazdadjoke.com/', {
                method: 'GET',
                headers: {
                    Accept: 'application/json'
                }
            })

            const data = await response.json()
            setJoke(data.joke)
        }

        fetchJokes()
    }, [])

    return [joke, setJoke]
}

export default useDadJokesWithFetchApi
