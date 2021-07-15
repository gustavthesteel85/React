import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ListModule from "../modules/ListModule";
import List from "./List.js";

const Appp = () => {
  const lists = useSelector(state => state.list);

  const [newListName, setListName] = useState("");
  const dispatch = useDispatch();

  const addList = () => {
    if (newListName !== "") {
      dispatch(ListModule.actions.addList({id: lists.length > 0 ? lists.reduce((a,b) => a.id > b.id ? a : b).id + 1 : 1, title: newListName}));
    }
    setListName("");
  };

  const handleChangeList = (e) => {
    setListName(e.target.value);
  };

  return (
    <div className="App">
      <p>Redux TODO sample</p>
      {lists.map((list) =>
        <List key={list.id} item={list} />
      )}
      <input type="text" onChange={handleChangeList} value={newListName}/>
      <button onClick={addList}>addList</button>
    </div>
  );
};

export default Appp;