import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = {
    name:"Emon",
    age:21,
    job:"Singer"
}

const singerStyle ={
  color:"red",
  backgroundColor:"white"
}


function App() {
  return (
    <div className="">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h2>We can also add normal elements</h2>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person(){
   return (
    <div className="header">
      <h2>Md. Emon</h2>
      <p>I am a student i love programming </p>
    </div>
   )
}

function Friend(){
  return(
    <div className="box">
        <h2>Name: Sakib Vhai</h2>
        <p>Profession: Cricketer</p>
    </div>
  );
}



export default App;
