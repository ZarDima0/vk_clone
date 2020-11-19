import logo from './logo.svg';
import './App.css';
import Header from "./component/Header.jsx"
import Nav from "./component/Nav.jsx"
import Content from "./component/Content.jsx"
const App = () => {
    return (
     <div className="App-wrapper">
         <Header />
        <Nav />
     </div>
    )
}



export default App;
