import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  
  const myProducts=[
    {name:"Computer",price:76000},
    {name:"Mobile",price: 25000},
    {name:"watch",price: 25000},
  ]

  return (
    <div className="App">

      {/* <h1>we can add element like this but this is not dynamic</h1>
      <MySelf></MySelf>

      <h2>We can also add component like this but this is not fully dynamic</h2>
      <Product name="phone" price="12300"></Product>

      <h2>This is a dynamic way of adding component</h2>
      {
        myProducts.map(prod=> <Product name={prod.name} price={prod.price}></Product>)
      } */}

      {/* <h2>Count project start</h2>

      <Counter></Counter>

      <h2>Counter done</h2> */}

      <ExternalUser></ExternalUser>
      

    </div>
  );
}


function DisplayUser(props){
  return(
    <div className="products-container">
      <h2>Name: {props.name}</h2>
      <p>Email: {props.mail}</p>
    </div>
  );
}

function ExternalUser(){
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=> res.json())
    .then(data=> setUsers(data))
  },[])

  return(
    <div className="">
      <h2>External Users</h2>
      <p>Totall User: {users.length}</p>
      {
        users.map(user=> <DisplayUser name={user.name} mail={user.email}></DisplayUser>)
      }
    </div>
  );

}



/*
function Counter(){
  const [count, setCount] = useState(0);
  const increseCount=()=>setCount(count+1);
  const decreseCount=()=>setCount(count-1);
  return(
    <div className="">
      <h2>Count: {count}</h2>
      <button onClick={increseCount}>Increase</button>
      <button onClick={decreseCount}>Decrease</button>
    </div>
  );
}

function Product(props){
  return(
    <div className="products-container">
      <h2>Name: {props.name}</h2>
      <p>Price: {props.price}</p>
    </div>
  );
}

function MySelf(){
  return(
    <div className="">
      <h2>Name: Md.Emon</h2>
      <p>Age: 21</p>
    </div>
  )
}
*/


export default App;
