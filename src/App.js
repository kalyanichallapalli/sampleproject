//import logo from './logo.svg';
import './App.css';
import FunctionComponent from  "./Components/functionalComp";
import ClassComponent from  "./Components/classComp"
import F1 from  "./PROPS/f1"

function App() {
 
  return (
    <div className="App">
      <h2>WELCOME TO REACT </h2>
      <FunctionComponent></FunctionComponent>
      <ClassComponent></ClassComponent>
      <F1></F1>
    </div>
  );
}

export default App;
