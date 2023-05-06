const {createStore,applyMiddleware} = require('redux');
const logger = require('redux-logger')
const history = [];
const increment = 'increment';
const decrement = 'decreemnt';
const incrementByAmount= 'incrementByAmount';
const store = createStore(reducer,applyMiddleware(logger.default));

function reducer(state={amount:1},action){
    if(action.type===increment){
        return {amount:state.amount+1}
    }
    if(action.type===decrement){
        return {amount:state.amount-1}
    }
    if(action.type===incrementByAmount){
        return {amount:state.amount+action.payload}
    }
    return state;
}

//creating action name



store.subscribe(()=>{
  history.push(store.getState());
  console.log(history)
})

// setInterval(()=>{
//     store.dispatch({type:'increment'});
//  },2000)

//action creator 
function Increment(){
    return {type:increment}
}

function Decrement(){
    return {type:decrement}
}

function IncrementByAmount(value){
    return {type:incrementByAmount,payload:value}
}



setInterval(()=>{
   store.dispatch(IncrementByAmount(1));
},2000)

