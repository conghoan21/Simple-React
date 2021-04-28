import React from 'react';
import './Person.css';


let Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>This is {props.name}. I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}></input>
        </div>
    ); 
};

// class Person extends Component{
//     render () {
//         return (
//             <p>This is {this.props.name}. I am {this.props.age} years old</p>
//         );
//     }
// }
export default Person;