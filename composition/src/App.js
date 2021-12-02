import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import { BlueButton, RedButton } from "./myComponents/style";

//composition
class UserNameForm extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
      </div>
    );
  }
}
class CreateUserName extends React.Component {
  render() {
    return (
      <div>
        < UserNameForm />
        <BlueButton>Create</BlueButton>
      </div>
    )
  }
}
class UpdateUserName extends React.Component {
  render() {
    return (
      <div>
        < UserNameForm />
        <RedButton>Update</RedButton>
      </div>
    )
  }
}




// inheritance
// class UserNameForm extends React.Component {
//   render() {
//      return (
//         <div>
//            <input type="text" />
//         </div>
//      );
//   }
// }
// class CreateUserName extends UserNameForm {
//   render() {
//      const parent = super.render();
//      return (
//         <div>
//            {parent}
//            <button>Create</button>
//         </div>
//      )
//   }
// }
// class UpdateUserName extends UserNameForm {
//   render() {
//      const parent = super.render();
//      return (
//         <div>
//            {parent}
//            <button>Update</button>
//         </div>
//      )
//   }
// }
ReactDOM.render(
  (<div>
     < CreateUserName />
     < UpdateUserName />
  </div>), document.getElementById('root')
);
