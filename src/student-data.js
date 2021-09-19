import logo from './logo.svg';
import './App.css';

function App() {
  const studentName=[
    { name:"Sofiq",learning:"Web Development"},
    { name:"Rofiq",learning:"Web Development"},
    { name:"Lofiq",learning:"Web Development"},
    { name:"Dofiq",learning:"Web Development"},
    { name:"Jofiq",learning:"Web Development"},
    { name:"Milad",learning:"Web Development"},
  ]


  return (
    <div className="App">
      <ul>
      <Student></Student>
        {
          studentName.map(student=><Student name={student.name} learning={student.learning}></Student>)
        }
        
      </ul>
      

    </div>
  );
}
function Student(props){
  return(
    <div className="person">
      <h2>Name: {props.name}</h2>
      <h4>Course content: {props.learning}</h4>
    </div>
  )
}






// comment
/* function App() {
  const playerName=["Sakib Al Hasan","Mahmudullah Riyad","Mushfiq", "Sohan","Mustafiz","Mithun", "Sabbir"]


  return (
    <div className="App">
      <ul>
        {
          playerName.map(player=><li>{player} </li>)
        }



       <li>{playerName[0]}</li>
        <li>{playerName[2]}</li>
        <li>{playerName[2]}</li>
        <li>{playerName[3]}</li>
        <li>{playerName[4]}</li>
        <li>{playerName[5]}</li> 
        
      </ul>
<Person name={playerName[0]} learning="Crickter" country="Bangladesh" formate="ODI"></Person>
<Person name={playerName[1]} learning="Crickter" country="Bangladesh" formate="Test"></Person>
<Person name={playerName[2]} learning="Crickter" country="Bangladesh" formate="Test"></Person>
<Person name={playerName[3]} learning="Crickter" country="Bangladesh" formate="Test"></Person>
<Person name={playerName[4]} learning="Crickter" country="Bangladesh" formate="Test"></Person>
<Person name={playerName[5]} learning="Crickter" country="Bangladesh" formate="Test"></Person>
<Person name={playerName[6]} learning="Crikcter" country="Bangladesh" formate="Test"></Person>

    </div>
  );
}
function Person(props){
  // console.log(props)
  const person={
    backgroundColor:'lightblue',padding: '5px',
    margin:'10px',
    border:'3px solid gray'
  }
  return(
    <div style={person}>
      <h1>Name: {props.name}</h1>
      <h3>Profession: {props.learning}</h3>
    </div>
  )
} */






export default App;
