// //class based component
import React from "react";
import { Component } from "react";
import Person from "./Person";

import './App.css';

class App extends Component {

  render() {
    return (

      <div className="App">
        <Person name="Alex">
          <p>I like cricket</p>
        </Person>
        <Person name="Bob">
          <p>I like football</p>
        </Person>
        <Person name="Mary">
          <p>I like tennis</p>
        </Person>

        <Person name="Mark" />
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


