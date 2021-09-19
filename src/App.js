import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {



  return (
    <div className="App">
      <ExternalUser></ExternalUser>
      {/* <Counter></Counter> */}

      

    </div>
  );
}
function ExternalUser(){
  const [users,setUsers]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>setUsers(data))
  }
  ,[])
  return(
    <div>
      <h1>External User</h1>
      {
        users.map(user=> <User name={user.name} email={user.email}></User> )
      }
    </div>
  )
}
function User(props){
  return(
    <div className="person">
      <h4>{props.name}</h4>
      <p>{props.email}</p>
    </div>
  )

}






function Counter(){
  const [count,setCount]=useState(0)
  // console.log(count,setCount)
  const handleIncrease=()=>{
    const newCount=count+1
    setCount(newCount)
  };
  const handleDecrease=()=>{setCount(count-1)
  };

  

  return(
    <div>
      <h2>Count: {count} </h2>
      <button className="btn" onClick={handleIncrease}>increase</button>
      <button className="btn" onClick={handleDecrease}>Decrease</button>

    </div>
  )
}






export default App;
