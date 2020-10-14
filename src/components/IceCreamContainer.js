import React from "react";
import {connect} from "react-redux";
import {buyIceCream} from '../redux'

function IceCreamContainer(props) {
    return (
        <>
            <h1> Hello everyone, we have {props.numOfIceCreams} ice creams. </h1>
            <button onClick={ props.buyIceCream }> Buy Ice Cream </button>
        </>
    )
}

function mapStateToProps(state) {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    };
}

function mapDispatchToProps(dispatch) {
    return {
        buyIceCream: function () {
            dispatch(buyIceCream());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer);
