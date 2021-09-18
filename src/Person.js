import React, { Component } from "react";

// function Person(props) {
//     return (
//         <div>
//             <div>
//                 <p>Hi I am {props.name}, having age {Math.floor(Math.random() * 30)}</p>
//             </div>
//             <p>{props.children}</p>
//         </div>
//     );
// }
/////props: arguments
//class based
class Person extends Component {
    render() {
        return (
            < div >
                <div>
                    <p>Hi I am {this.props.name}, having age {this.props.age}</p>
                </div>
                <p>{this.props.children}</p>
            </div >
        );
    }
}
export default Person;