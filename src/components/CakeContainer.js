import React from "react";
import {connect} from "react-redux";
import {buyCake} from '../redux/'

function CakeContainer(props) {
    return (
        <>
            <h1> Hello everyone, we have {props.numOfCakes} cakes. </h1>
            <button onClick={ props.buyCake }> Buy Cake </button>
        </>
    )
}

function mapStateToProps(state) {
    return {
        numOfCakes: state.cake.numOfCakes
    };
}

function mapDispatchToProps(dispatch) {
    return {
        buyCake: function () {
            dispatch(buyCake());
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer);
