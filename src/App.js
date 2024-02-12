import './App.css';
// import useDadJokesWithFetchApi from './hooks/useDadJokesWithFetchApi'
import useDadJokesWithAxios from './hooks/useDadJokesWithAxios'

function App() {
    // const [ joke, setJoke ] = useDadJokesWithFetchApi()
    const [ joke, setJoke ] = useDadJokesWithAxios()

    const handleGenerateNewJoke = () =>{
        console.log("generate new joke clicked")
        //TODO: will add functionality to generate new joke
    }

  return (
    <div className="App">
      <h3>{joke}</h3>
      <button onClick={handleGenerateNewJoke}>Get new Joke</button>
    </div>
  );
}

export default App;
