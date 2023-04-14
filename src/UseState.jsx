import React, { useState } from "react";

const UseState = () => {
  const [count,setCount] = useState(() => {
    console.log('runs the function');
    return 4
  }) // we can pass in a function arugument too instead of a hard coded value, and that function runs only once when the component renders
  // const [{count1,count2},setCount] = useState({count1:10,count2:20}) // make single useState object and destructure them here itself IF they have same usecase
  function decrementCount(){
    setCount(prevCount => (prevCount -1))
  }
  function incrementCount(){
    setCount(prevCount => prevCount + 1)
  }

  return ( 
    <div className="use-state">
      {/* <button onClick={() => setCount(currentState => ({...currentState,count1:currentState.count1 + 1}))}>+</button>  */}
      <button onClick={decrementCount}>-</button>
      <div >{count}</div>
      <button onClick={incrementCount}>+</button>
      {/* <div>count 1:{count1}</div>
      <div>count 2:{count2}</div> */}
      

    </div>
  );
}
 
export default UseState;