import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './Component/Card';


function App() {
  const[count, setCount] = useState(0)
function counter(){
  setCount(count+1)
  console.log(count)

}
function decrement(){
  if(count>0){
    setCount(count-1)

  }


}
const content = "this is a content";
const image= "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

  return (
    <>
    <div className='container text-center'>
      <h1>Second Project</h1>
      <p>{count}</p>
      <button className='btn btn-success mx-2' onClick={counter}>increment</button>
      <button className='btn btn-success mx-2' onClick={decrement}>decrement</button>
    </div>

    <Card title={"python"} content={"this is some content"} image={image}/>
    <Card title={"react"} content={content}  image={image}/>
    <Card title={"js"} content={"some javascript code goes here..."} image={image}/>
      
    </>
  )
}

export default App
