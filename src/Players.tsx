interface PlayersProps {
    players: any[];
    id: number;
    setSinglePlayer: (player: any) => void;
  }

const Players = ({ players, id, setSinglePlayer }: PlayersProps) => {
    return (
        <div className="players">
            {players.map((player: any)=> {
                return (
                    <section 
                        key={player.id}
                        onClick={() => {
                            window.location.hash = player.id;
                            const selectedPlayer: any = players.find((p: any) => p.id === player.id) 
                            setSinglePlayer(selectedPlayer);
                        }}
                    >
                        <div>
                            <h2>{player.name}</h2>
                            <p>{player.breed}</p>
                        </div>
                    </section>
                );
            })}        
        </div>
    );
  }

export default Players;