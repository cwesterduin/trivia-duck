import React, { useState } from 'react';

function JoinRoom () {
    const [gameId, setGameId] = useState('')

    const handleChange = (e) => {
        setGameId(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        location.href = `lobby/${gameId}`;
    }

    return (
    <>
        <form aria-label="redirect" onSubmit={handleSubmit}>
           <h3>Type game ID here to Join Game</h3>
           <label for="url">Game ID</label>
           <input id='url' aria-label="joinLink" type='text' name="urlInput" placeholder="Type game ID" value={gameId} onChange={handleChange} />
           <input type="submit" value="Join Game"/>
        </form>   
    </>)

}

export default JoinRoom;