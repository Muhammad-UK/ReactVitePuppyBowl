
const Players = ({ players }: any ) => {
    return (
        <div className="players">
            {players.map((player: any)=> {
                return (
                    <section key={player.id}>
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