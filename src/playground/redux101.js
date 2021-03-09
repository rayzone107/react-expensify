import { createStore } from 'redux';

// Action Generators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

// const setCount = ({ count = 1 } = {}) => ({
//     type: 'SET',
//     count
// });

function setCount(count = 1) {
    return {
        type: 'SET',
        count
    }
}

const reset = () => ({
    type: "RESET"
});

// Reducers

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            }
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            }
        case "RESET":
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(reset());

store.dispatch(decrementCount({ decrementBy: 10 }));

// store.dispatch(setCount({ count: 101 }));
store.dispatch(setCount(101));
