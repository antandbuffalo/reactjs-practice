import React from 'react';
import './Person.css';

function Person(props) {
    return (
        <div class="Person">
            <div>I am {props.name} and {props.age} years old</div>
            <input type="text" onChange={props.nameChanged}/>
        </div>
    )
}

export default Person;