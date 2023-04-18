import React, {useReducer} from 'react'

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

function reducer (state,action) { // aruguments: current state and 'action' i.e. action to be performed on the state
  switch(action.type){
    case ACTIONS.INCREMENT :
      return {count: state.count + 1}
    case ACTIONS.DECREMENT : 
      return {count: state.count - 1}
    default:
      state
  }
}

function UseReducer() {
  const [state,dispatch] = useReducer(reducer, {count:0}) // 1) 'reducer' is the function that we perform on our state to get new state 2) Initial Value i.e. count
  // state -> the state i.e. count:0 and dispatch -> what we call in order to update the state
  return (
    <>
      <button onClick={() => dispatch({type: ACTIONS.INCREMENT})}>+</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({type: ACTIONS.DECREMENT})}>-</button>
    </>
  )
}

export default UseReducer
