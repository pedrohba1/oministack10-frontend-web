import React, { useState, useEffect } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
  faWindowClose,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import Textarea from "./../components/Textarea/Textarea";

function DevItem({ dev, onDelete, onEdit, _id }) {
  const [form, setForm] = useState("");
  const [buttons, setButtons] = useState("");
  const [mode, setMode] = useState("");

  async function handleDelete() {
    await onDelete({ _id });
  }

  async function handleEdit() {
    await onEdit({ dev });
  }

  const toggleMode = mode => {
    setMode(mode);
  };

  useEffect(() => {
    let userInfo = (
      <div className="user-info">
        <strong>{dev.name}</strong>
        <span>{dev.techs.join(", ")}</span>
      </div>
    );
    let userBio = <p>{dev.bio} </p>;

    let buttonRight = (
      <span onClick={() => toggleMode("edit")} className="edit-button">
        <FontAwesomeIcon icon={faEdit} size="1x" />
      </span>
    );
    let buttonLeft = (
      <span onClick={handleDelete} className="delete-button">
        <FontAwesomeIcon icon={faTrash} size="1x" />
      </span>
    );

    if (mode === "edit") {
      userInfo = (
        <div className="user-info">
          <Textarea value={dev.name}></Textarea>
          <Textarea value={dev.techs.join(", ")}></Textarea>
        </div>
      );
      userBio = <Textarea value={dev.bio}> </Textarea>;
      buttonLeft = (
        <span onClick={() => toggleMode("close")} className="close-button">
          <FontAwesomeIcon icon={faWindowClose} size="1x" />
        </span>
      );
      buttonRight = (
        <span onClick={() => {}} className="check-button">
          <FontAwesomeIcon icon={faCheck} size="1x" />
        </span>
      );
    }

    setForm(
      <React.Fragment>
        <header>
          <img src={dev.avatar_url} alt={dev.name}></img>
          {userInfo}
        </header>
        {userBio}
      </React.Fragment>
    );

    setButtons(
      <div className="bottom">
        {buttonLeft}
        {buttonRight}
      </div>
    );
  }, [mode]);

  return (
    <li className="dev-item">
      {form}
      <div className="">
        <a
          className="github-link"
          href={`https://github.com/${dev.github_username}`}
        >
          Acessar perfil no github
        </a>
      </div>
      {buttons}
    </li>
  );
}

export default DevItem;
