import logo from './logo.svg';
import './App.css';

function App() {


  return (
    <div className="App">
<Person name="Sakib Al Hasan" job="Crickter" country="Bangladesh" formate="ODI"></Person>
<Person name="Mahmudullah Riyad" job="Crickter" country="Bangladesh" formate="Test"></Person>
<Person name="Mushfiq" job="Crickter" country="Bangladesh" formate="Test"></Person>
<Person name="Sohan" job="Crickter" country="Bangladesh" formate="Test"></Person>
<Person name="Mustafiz" job="Crickter" country="Bangladesh" formate="Test"></Person>
<Person name="Mithun" job="Crickter" country="Bangladesh" formate="Test"></Person>
<Person name="Sabbir" job="Crikcter" country="Bangladesh" formate="Test"></Person>

    </div>
  );
}
function Person(props){
  console.log(props)
  const person={
    backgroundColor:'lightblue',padding: '5px',
    margin:'10px',
    border:'3px solid gray'
  }
  return(
    <div style={person}>
      <h1>Name: {props.name}</h1>
      <h3>Profession: {props.job}</h3>
      <h3>Country: {props.country}</h3>
      <h3>Formate: {props.formate}</h3>
    </div>
  )
}


export default App;
