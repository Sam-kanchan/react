// //class based component
import React from "react";
import { Component } from "react";
import Person from "./Person";

import './App.css';

class App extends Component {

  myVar = 'Hello';

  // creating the state to manage the data of application at one place
  state = {
    person: [
      { name: 'Alex', age: '30' },
      { name: 'Bob', age: '20' },
      { name: 'Mary', age: '23' },
      { name: 'Mark', age: '40' }
    ]
  }
  render() {
    return (

      <div className="App">
        {/* using the state to manage the data of application at one place*/}
        <Person name={this.state.person[0].name} age={this.state.person[0].age}>
          <p>I like cricket</p>
        </Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}>
          <p>I like football</p>
        </Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}>
          <p>I like tennis</p>
        </Person>

        <Person name={this.state.person[3].name} age={this.state.person[3].age} />
        <div className="App">{this.myVar}</div>
      </div>
    )
  }
}

export default App;


////Functional based component

// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       Hello to React!
//     </div>
//   );
// }

// export default App;


