import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {buyCake} from "../redux";

function HookCakeContainer() {
    const numOfCakes = useSelector( state => state.cake.numOfCakes);
    const dispatch = useDispatch();
    return (
        <>
            <h1> Hello everyone, we have {numOfCakes} cakes. </h1>
            <button onClick={ () => dispatch(buyCake()) }> Buy Cake </button>
        </>
    )
}

export default HookCakeContainer;
