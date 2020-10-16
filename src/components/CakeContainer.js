import React, {useState} from "react";
import {connect} from "react-redux";
import {buyCake} from '../redux/'

function CakeContainer(props) {
    const [number, setNumber] = useState(1);
    return (
        <>
            <h1> Hello everyone, we have {props.numOfCakes} cakes. </h1>
            <input type="text" value={ number } onChange={ e => setNumber(e.target.value) } />
            <button onClick={() => props.buyCake(number) }> Buy { number } Cake </button>
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
        buyCake: function (number) {
            dispatch(buyCake(number));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer);
