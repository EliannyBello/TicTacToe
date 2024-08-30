import React from "react"

const VictoryScreen = ({winPlayer, onclickReplay}) => {
    return (
        <article className="victoryScreen">
            <div className="victoryScreen-box">
                <h2 className="victory-title">Winner:</h2>
                <h2 className="victory-player">{winPlayer}</h2>
                <button onClick={onclickReplay} className="victory-replay">Replay</button>
            </div>
        </article>
    )
}

export default VictoryScreen