// import logo from './logo.svg';
import './App.css';
import Person from './components/Person/Person';
import Example from './components/Example';
import React, { useState } from 'react';

function App() {
  let [ShowPersons, setShowPersons] = useState(true);
  let [person, setPerson] = useState([
    {name:'Hoan 1', age: 24},
    {name:'Hoan 2', age: 25},
    {name:'Hoan 3', age: 26}
  ]);
  // let changeNameHandler = () =>{
  //   setPerson ([
  //     {name:'Hoan 4', age: 27},
  //     {name:'Hoan 5', age: 28},
  //     {name:'Hoan 6', age: 29}
  //   ]);
  // };
  // let switchNameHandler = (event) =>{
  //   console.log(event.target.value);
  //   setPerson ([
  //     {name:event.target.value, age: 27},
  //     {name:'Hoan 5', age: 28},
  //     {name:'Hoan 6', age: 29}
  //   ]);
  // };
  let deletePerson =(personIndex)=>{
    let newPerson = [...person];
    newPerson.splice(personIndex,1);
    setPerson(newPerson);
  }
  let togglePersons =()=>{
    setShowPersons(!ShowPersons)
  };

  let personlist = null;

  let style = {
    backgroundColor: 'blue',
    font: 'inherit',
    border: '1px solid',
    padding: '8px',
    cursor: 'pointer',
  };

  let classes = [];
  if(person.length<=2){
    classes.push('red');
  }
  if(person.length<=1){
    classes.push('bold');
  }

  if(ShowPersons===true){
     personlist= (<div>
     {
       person.map((item, index)=>{
         return(
          <Person key={index} click={()=>deletePerson(index)} name={item.name} age={item.age}/>
         )
       })
     }
     </div>);
     style.backgroundColor='white';
  };
  return (
    <div className="App">
      <h1>This is my first app</h1>
      <p className={classes.join(' ')} >This is dynamic class</p>
      <button style={style} onClick={()=>togglePersons()}>Toggle Persons</button>
      {personlist}
      
      <Example></Example>
    </div>
  );
}

export default App;
