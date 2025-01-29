import { useState } from "react";

function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleInputChange}
      />
    );
  }

  function handleClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleInputChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => handleClick()}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}

export default Player;
