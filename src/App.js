// import logo from './logo.svg';
//import './App.css';
import React from "react";
// import OtroComponente from "./componentes/otrocomponente/OtroComponente";
// import Persona from "./componentes/Persona/Persona";
// import ComponenteFuncional from './componentes/Componentefuncional/ComponenteFuncional';

class App extends React.Component {// sin ()
  
  render(){
    return(
      <div className='App'>
        <h1>Hello Dojo!</h1>
        <h3>Things I need to do:</h3>
        <ul>
          <li>Learn react</li>
          <li>Learn react</li>
          <li>Learn react</li>
          <li>Learn react</li>
        </ul>
        {/* <ComponenteFuncional num ={12} aumento={2}/> */}
      </div>
    )

  }
}
export default App;
// const App = () => {
//   return(
//     <div className="App">
//       <h1>Hola</h1>
//       <p>
//         Cargo mediante componentes de funcion!
//       </p>
//     </div>
    
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


