import logo from './logo.svg';
import './App.css';

function App() {
  const student={
    firstName:"Kabir",
    lastName:"Khan"
  }
  const student1={
    firstName:"Sabir",
    lastName:"Khan"
  }
  const student2={
    firstName:"Safiq",
    lastName:"Khan"
  }
  const student3={
    firstName:"Alauddin",
        lastName:"Khan"
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
        <h1>Welcome <br /> To Student dashboard</h1>
        <p>{student.firstName + ' ' + student.lastName}</p>
        <p>{student1.firstName + ' ' + student1.lastName}</p>
        <p>{student2.firstName + ' ' + student2.lastName}</p>
        <p>{student3.firstName + ' ' + student3.lastName}</p>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
