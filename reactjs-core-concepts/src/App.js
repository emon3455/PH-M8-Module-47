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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <h2 className="header">
          Hello!! i am Emon.
        </h2>

        <p>I love programming {2222+number} times</p>
        <p style={singerStyle}> Name: {singer.name}, Age: {singer.age}, Job: {singer.job}</p>

        <p style={ {color:"white",backgroundColor:"violet",padding:"1rem"} }>Hello newbies!!!</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
