interface SinglePlayerProps {
    singlePlayer: any;
    handleBackClick: () => void;
}

const SinglePlayer = ({ singlePlayer, handleBackClick }: SinglePlayerProps) => {
    return (
        <div>
            <div className="button" onClick={handleBackClick}>
                <h2>Back to All Players</h2>
            </div>
            {singlePlayer ? (
                <div className="players">
                    <section className="singlePuppy" key={singlePlayer.id}>
                        <div>
                            <h2>{singlePlayer.name}</h2>
                            <p>{singlePlayer.breed}</p>
                            <img src={singlePlayer.imageUrl} alt={singlePlayer.name} />
                        </div>
                    </section>
                </div>
            ):( null )}
        </div>
    );
}

export default SinglePlayer;