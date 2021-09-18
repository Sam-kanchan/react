import React, { Component } from "react";

// function Person() {
//     return <p>Hi I am a person - Functional</p>;
// }

//class based
class Person extends Component {
    render() {
        return <p>Hi I am a person having age {Math.floor(Math.random() * 30)}</p>
    }
}
export default Person;