import React from "react";
import {useSelector} from "react-redux";

const HelloReduxExampleComponent = () => {
    const myMessage = useSelector((state)=>state.message);
    return(
        <h1>{myMessage}</h1>
    );
};

export default HelloReduxExampleComponent;