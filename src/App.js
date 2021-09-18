// //class based component
import React from "react";
import { Component } from "react";
import Person from "./Person";

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Person></Person>
        <Person></Person>
        <Person></Person>

        <Person />
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


