import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = {
    name:"Emon",
    age:21,
    job:"Singer"
}

const singerStyle ={
  color:"blue",
  backgroundColor:"gray",
  textAlign:"center",
  padding:"0.5rem"
}

const center={
  textAlign:"center"
}

const students=["Emon","Elina","Tuspa","Rajon","Aminul","Rafi","Mohiny"];
const friends=[
  {name:"Elina",age:22},
  {name:"Mohiny",age:21},
  {name:"Sajjad",age:23},
];

function App() {

  return (
    <div className="">
      <Person></Person>
      <h2 style={{textAlign:"center"}}>We can also add normal elements</h2>
      <Friend></Friend>
      <h2 style={singerStyle}> Lets explore Dynamic data in component with props</h2>

      <Subject name="Web Pprogramming" code="CSE301"></Subject>
      <Subject name="Data Com" code="CSE303"></Subject>
      <Subject name="IPD-1" code="CSE324"></Subject>
      
      <h2>Displaying All students</h2>

      {
        students.map(student=> <Person name={student}></Person> )
      }

      <h1>All of My Good Friends are</h1>
      {
        friends.map(friend=>{
          return(
            <div className="box">
              <h2>Name: {friend.name}</h2>
              <h2>Age: {friend.age}</h2>
            </div>
          );
        })
      }

    </div>
  );
}


function Subject(props){
  return(
    <div className="container">
      <h2>Subject: {props.name}</h2>
      <p>Code: {props.code}</p>
    </div>
  );
}


function Person(props){
   return (
    <div className="header">
      <h2>Name: {props.name}</h2>
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
