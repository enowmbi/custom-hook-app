import { useState, useEffect } from 'react'

const useWindowSize = () =>{
    const [windowSize, setWindowSize] = useState({width: undefined, height: undefined})

    useEffect(() =>{
        const handleResize = () =>{
            setWindowSize({width: window.innerWidth, height: window.innerHeight})
        } 
         
        handleResize()

        window.addEventListener('resize', handleResize)

        const cleanUp = () =>{
            console.log("calling clean up")
            window.removeEventListener('resize', handleResize)
        }

        return cleanUp
    }, [])

    return windowSize //not that windowSize is an object {width, height}
}

export default useWindowSize
