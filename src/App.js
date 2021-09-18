// //class based component
import React from "react";
import { Component } from "react";

import './App.css';

class App extends Component {

  render() {
    return React.createElement('div', { className: 'App' }, React.createElement('h1', { className: 'Name' }, 'Hi Jittu'))
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


