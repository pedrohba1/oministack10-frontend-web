import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

function DevItem({ dev, onDelete, _id }) {
  async function handleDelete() {
    await onDelete({ _id });
  }

  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name}></img>
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(", ")}</span>
        </div>
      </header>

      <p>{dev.bio} </p>

      <div className="">
        <a
          className="github-link"
          href={`https://github.com/${dev.github_username}`}
        >
          Acessar perfil no github
        </a>
      </div>
      <div className="bottom">
        <span onClick={handleDelete} className="delete-button">
          <FontAwesomeIcon icon={faTrash} size="1x" />
        </span>
        <span onClick={handleDelete} className="edit-button">
          <FontAwesomeIcon icon={faEdit} size="1x" />
        </span>
      </div>
    </li>
  );
}

export default DevItem;
