// // const JSX =(
// //         <div>
// //             <h1>Hello React!</h1>
// //             <p>this is a const variable</p>
// //             <ul>
// //                 <li>this is being written with JSX</li>
// //                 <li>this is being written with JSX</li>
// //                 <li>this is being written with JSX</li>
// //             </ul>
// //         </div>
// //         );
//
// import React from "react";
// import ReactDOM from "react-dom";
//
// // React2.js
//
// const JSX = (
//     <div className={"myDiv"}>
//         <h1>This is a block of JSX</h1>
//         <p>Here's a subtitle</p>
//         {/*This is a comment */}
//     </div>
// );
//
// const MyComponentFunc = function() {
//     // Change code below this line
//     return (
//         <div className={"myDiv"}>
//             <h1>This is a block of JSX</h1>
//             <p>Here's a subtitle</p>
//             {/*This is a comment */}
//         </div>
//     );
//     // Change code above this line
// }
//
// class MyComponentClass extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         // Change code below this line
//         return(
//             <div>
//                 <h1>Hello React!</h1>
//             </div>
//         );
//         // Change code above this line
//     }
// }
//
//
// ReactDOM.render(JSX, document.getElementById("challenge-node"));
//
//
// const ChildComponent = () => {
//     return (
//         <div>
//             <p>I am the child</p>
//         </div>
//     );
// };
//
// class ParentComponent extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <h1>I am the parent</h1>
//                 { /* Change code below this line */ }
//                     <ChildComponent/>
//
//                 { /* Change code above this line */ }
//             </div>
//         );
//     }
// };
//
// const TypesOfFruit = () => {
//     return (
//         <div>
//             <h2>Fruits:</h2>
//             <ul>
//                 <li>Apples</li>
//                 <li>Blueberries</li>
//                 <li>Strawberries</li>
//                 <li>Bananas</li>
//             </ul>
//         </div>
//     );
// };
//
// const Fruits = () => {
//     return (
//         <div>
//             { /* Change code below this line */ }
//                 <TypesOfFruit/>
//             { /* Change code above this line */ }
//         </div>
//     );
// }
//
// class TypesOfFood extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Types of Food:</h1>
//                 { /* Change code below this line */ }
//                     <Fruits/>
//                 { /* Change code above this line */ }
//             </div>
//         );
//     }
// }
//
// class MyComponent extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return(
//             <div>
//                 <h1>My First React Component!</h1>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));
//
//
//

// const ShoppingCart = (props) => {
//     return (
//         <div>
//             <h1>Shopping Cart Component</h1>
//         </div>
//     )
// };
// // Change code below this line
//
// ShoppingCart.defaultProps = {items: 0};

import PropTypes from "prop-types";

class CampSite extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Camper/>
            </div>
        );
    }
}
// Change code below this line

const Camper = (props) => {
    return (
        <div>
            <p>{props.name}</p>
        </div>
    );
};

Camper.defaultProps = {
    name: "CamperBot"
};
Camper.propTypes = {
    name: PropTypes.string.isRequired
};


