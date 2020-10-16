import { BUY_CAKE } from './cakeTypes';

const initialSate = {
    numOfCakes: 10
}

function cakeReducer(prevState = initialSate, action) {
    switch (action.type) {
        case BUY_CAKE: return {
            ...prevState,
            numOfCakes: prevState.numOfCakes > 0 ? prevState.numOfCakes - action.payload : 0
        };
        default: return prevState;
    }
}

export default cakeReducer;
