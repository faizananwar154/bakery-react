import { BUY_ICE_CREAM } from "./iceCreamTypes";

const initialState = {
    numOfIceCreams: 20
};

function iceCreamReducer(prevState = initialState, action) {
    switch (action.type) {
        case BUY_ICE_CREAM: return {
            ...prevState,
            numOfIceCreams: prevState.numOfIceCreams > 0 ? prevState.numOfIceCreams - 1 : 0
        };
        default: return prevState;
    }
}

export default iceCreamReducer;
