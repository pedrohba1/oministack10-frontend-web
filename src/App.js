import React, { useState, useEffect } from "react";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  return (
    <div id="App">
      <aside>
        <strong className="">Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username"> Usuário do github</label>
            <input name="github_username" id="github_username" required></input>
          </div>
          <div className="input-block">
            <label htmlFor="techs"> Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor=""> Latitude </label>
              <input name="lat" id="lat" required></input>
            </div>
            <div className="input-block">
              <label htmlFor=""> Latitude </label>
              <input name="lon" id="lon" required></input>
            </div>
          </div>
          <button type="submit"> Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/39497156?s=460&v=4"></img>

              <div className="user-info">
                <strong>Pedro Bufulin</strong>
                <span>React,lips,C</span>
              </div>
            </header>
            <p>dev em uberlnadia</p>
            <a href="https://github.com/pedrohba1">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/39497156?s=460&v=4"></img>

              <div className="user-info">
                <strong>Pedro Bufulin</strong>
                <span>React,lips,C</span>
              </div>
            </header>
            <p>dev em uberlnadia</p>
            <a href="https://github.com/pedrohba1">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/39497156?s=460&v=4"></img>

              <div className="user-info">
                <strong>Pedro Bufulin</strong>
                <span>React,lips,C</span>
              </div>
            </header>
            <p>dev em uberlnadia</p>
            <a href="https://github.com/pedrohba1">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/39497156?s=460&v=4"></img>

              <div className="user-info">
                <strong>Pedro Bufulin</strong>
                <span>React,lips,C</span>
              </div>
            </header>
            <p>dev em uberlnadia</p>
            <a href="https://github.com/pedrohba1">Acessar perfil no github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
