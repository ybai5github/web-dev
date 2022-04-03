import React, {useEffect, useState} from "react";
import TuitListItem from "./tuit-list-item.js";
import {useDispatch, useSelector} from "react-redux";
import {findAllTuits} from "../actions/tuits-action";


const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() => findAllTuits(dispatch), []);


    return (


        <ul className="list-group">
            {
                tuits.map && tuits.map(tuit =>
                    <TuitListItem key={tuit._id}
                                  tuit={tuit}/>)
            }

        </ul>
    );
}

export default TuitList;