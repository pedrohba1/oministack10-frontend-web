import React, { useState, useEffect } from "react";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";
import api from "./services/api";
import DevItem from "./DevItem/index";
import DevForm from "./DevForm/index";
import findElement from "./utils/findElement";

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data) {
    console.log(data);
    const response = await api.post("/devs", data);

    setDevs([...devs, response.data]);
    console.log(response.data);
  }

  async function handleDeleteDev(data) {
    let updatedDevs = [...devs];
    console.log(updatedDevs);
    const response = await api.delete("/devs", { data });
    let element = findElement(updatedDevs, "_id", response.data._id);
    let index = updatedDevs.indexOf(element.item);
    console.log(element.item);
    if (index !== -1) {
      updatedDevs.splice(element.index, 1);

      console.log("antes do update");
      console.log(updatedDevs);

      setDevs(updatedDevs);
    }

    console.log("depois do update");
    console.log(updatedDevs);
  }

  async function handleEditDev(data) {
    console.log(data);
  }

  return (
    <div id="App">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}></DevForm>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem
              _id={dev._id}
              key={dev._id}
              dev={dev}
              onDelete={handleDeleteDev}
              onEdit={handleEditDev}
            ></DevItem>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
