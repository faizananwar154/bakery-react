import React from "react";
import {connect} from "react-redux";
import {buyCake, buyIceCream} from "../redux";

function ItemContainer(props) {
    return (
        <>
            <h2> { props.totalItems } </h2>
            <button onClick={props.buyItems}> But Item </button>
        </>
    )
}

function mapStateToProps(state, props) {
    const currentState = props.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams;
    return {
        totalItems: currentState
    };
}

function mapDispatchToProps(dispatch, props) {
    const currentDispatch = props.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream());
    return {
        buyItems: currentDispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)