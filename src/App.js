import './App.css';
import Header from './components/Header'
// import useDadJokesWithFetchApi from './hooks/useDadJokesWithFetchApi'
import useDadJokesWithAxios from './hooks/useDadJokesWithAxios'
import useWindowSize from './hooks/useWindowSize'

function App() {
    // const [ joke, setJoke ] = useDadJokesWithFetchApi()
    const [ joke ] = useDadJokesWithAxios()
    const { width }= useWindowSize()

    const handleGenerateNewJoke = () =>{
        console.log("generate new joke clicked")
        //TODO: will add functionality to generate new joke
    }

  return (
    <div className="App">
      <Header
          title={"Custom Hooks"} 
          width={width}
      />
      <hr/>
      <h3>{joke}</h3>
      <button onClick={handleGenerateNewJoke}>Get new Joke</button>
    </div>
  );
}

export default App;
