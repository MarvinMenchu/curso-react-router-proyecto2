import {render} from 'react-dom';
import './index.css';
import App from './App';

const container = document.getElementById('root');



//const root = ReactDOM.createRoot(rootElement);
render(<App />, container);


// function App(props) {
//     return (
//         <h1> {props.saludo}, {props.nombre}! </h1>
//     );
    
// }

// function withSaludo(WrappedComponent){
//     return function WrappedComponentWithSaludo(saludo){
//         return function ComponenteDeVerdad(props){
//             return (
//                 <>
//                     <WrappedComponent {...props} saludo={saludo} />
//                     <p>Estamos acompañando al WrappedComponent</p>
//                 </>
//             )
//         }
//     }
// }

// const AppWithSaludo = withSaludo(App)("Hey");