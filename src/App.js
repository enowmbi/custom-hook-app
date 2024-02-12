import './App.css';
import useDadJokesWithFetchApi from './hooks/useDadJokesWithFetchApi'

function App() {
    const [ joke, setJoke ] = useDadJokesWithFetchApi()

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
