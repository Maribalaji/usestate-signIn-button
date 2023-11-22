import logo from './logo.svg';
import './App.css';
import Usestate from './usestate';
import React,{useState} from 'react'
import Signin from './Signin';

function App() {
  const [color,setColor]=useState("red")
   function changeColor(){
     setColor("blue")
    }
    const employee=[

      {
      name:"Alex",
      skills:[
      {name:"ReactJS", type:"Frontend"},
      {name:"nodeJS", type:"Backend"}
      ]
      
      },
      {
      name:"Anna",
      skills:[
      {name:"Angular", type:"Frontend"},
      {name:"Python", type:"Backend"}
      ]
       }
      ]

  return (
    <div className="App">
      <p>color:{color}</p>
      <button onClick={changeColor}>click</button>
      <Usestate detail={employee}/>

      <div>
           <Signin /> 
        </div>
    </div>

  );
}

export default App;
