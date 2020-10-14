import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {buyIceCream} from "../redux";

function HookCakeContainer() {
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams);
    const dispatch = useDispatch();
    return (
        <>
            <h1> Hello everyone, we have {numOfIceCreams} ice creams. </h1>
            <button onClick={ () => dispatch(buyIceCream()) }> Buy Ice Cream </button>
        </>
    )
}

export default HookCakeContainer;
