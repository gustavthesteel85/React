import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ListModule from "../modules/ListModule";

const List = (props) => {
    const { item } = props;
    const dispatch = useDispatch();

    const deleteList = () => dispatch(ListModule.actions.deleteList(item.id));

    return (
        <div>
            {item.title}
            <button onClick={deleteList}>deleteList</button>
        </div>
    )
}

export default List;