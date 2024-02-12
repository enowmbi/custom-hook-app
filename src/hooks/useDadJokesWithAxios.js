import { useState, useEffect } from 'react'

const useDadJokes = () =>{
    const [joke, setJoke] = useState("")

    useEffect(()=>{
        const fetchJokes = () =>{
            fetch('https://icanhazdadjoke.com/', {
                method: 'GET',
                headers: {
                    Accept: 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    setJoke(data.joke)
                })
        }

        fetchJokes()
    }, [])

    return [joke]
}

export default useDadJokes
