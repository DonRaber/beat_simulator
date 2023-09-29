import React, { useEffect, useState } from "react";

function BeatButton( { sound, beatButtonWasClicked, setBeatButtonWasClicked } ) {

  function handleClick() {
    fetch(`http://localhost:8003/sounds/${sound.id}`, {
      method: "PATCH",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "genre": sound.genre,
        "type": sound.type,
        "name": sound.name,
        "ref": sound.ref,
        "isMuted": (!sound.isMuted)
      })
    })
    .then(r=>r.json())
    setBeatButtonWasClicked(beatButtonWasClicked + 1)
  }

    return(
      <div>
        <button className={sound.isMuted ? `${sound.type}-pad` : `${sound.type}-pad-on`} onClick={handleClick} >{sound.name}</button>
      </div>
    )
  }

export default BeatButton