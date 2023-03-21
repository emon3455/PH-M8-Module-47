import logo from './logo.svg';
import './App.css';

function App() {
  
  const myProducts=[
    {name:"Computer",price:76000},
    {name:"Mobile",price: 25000},
    {name:"watch",price: 25000},
  ]

  return (
    <div className="App">
      <h1>we can add element like this but this is not dynamic</h1>
      <MySelf></MySelf>

      <h2>We can also add component like this but this is not fully dynamic</h2>
      <Product name="phone" price="12300"></Product>

      <h2>This is a dynamic way of adding component</h2>
      {
        myProducts.map(prod=> <Product name={prod.name} price={prod.price}></Product>)
      }

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

export default App;
