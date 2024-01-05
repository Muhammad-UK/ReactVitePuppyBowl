import { useEffect, useState } from 'react'
import './App.css'
import Title from './Title.tsx'
import Players from './Players.tsx'
import SinglePlayer from './SinglePlayer.tsx';

function App() {
  const COHORT: string = "2309-AM";
  const puppyAPI: string = "https://fsa-puppy-bowl.herokuapp.com/api/" + COHORT;

  const [players, setPlayers] = useState([]);
  const [id, setId] = useState(+window.location.hash.slice(1));
  const [singlePlayer, setSinglePlayer] = useState(null);

  useEffect(()=> {
    const fetchPlayers = async () => {
      try {
        const response: any = await fetch(puppyAPI + "/players");
        const json: any = await response.json();
        setPlayers(json.data.players);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPlayers();

    window.addEventListener("hashchange", () => {
      setId(+window.location.hash.slice(1));
    });
  }, []);

  const handleBackClick = () => {
    window.location.hash = '';
    setSinglePlayer(null);
  };

  return (
    <div>
      <Title />
      {singlePlayer ? (
        <SinglePlayer singlePlayer={ singlePlayer } handleBackClick={handleBackClick} />
      ):(
        <Players players={ players } id={ id } setSinglePlayer={ setSinglePlayer }/>
      )}
    </div>
  );
}

export default App
