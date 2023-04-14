import React, { useEffect, useState } from "react";

const UseEffect = () => {
  // const [resourceType, setResourceType] = useState('posts');
  const [items,setItems] = useState([]) // empty-array 
  const [windowWidth,setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  
  
  // useEffect( () => {
  //  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //  const data = await response.json() // promise resolved
  //  console.log(data)
  
  // fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  // .then(response => response.json())
  // .then(json => setItems(json))

  // }) // if we pass resourceType, useEffect will run every time the value of resourceType is changed

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => { // CLEANUP FOR USE EFFECT HOOK i.e. this runs before the above code and cleans up before event listners before running the useEffect
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return ( 
    <>
      {/* <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>
      })} */}
      <div>DEIMENSIONS: {windowWidth}×{windowHeight}</div>
    </>
  );
}
 
export default UseEffect;