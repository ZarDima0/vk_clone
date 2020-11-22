import logo from './logo.svg';
import './App.css';
import Header from "./component/header/Header.jsx";
import Nav from "./component/Nav/Nav.jsx";
import Content from "./component/Content/Content.jsx";
import Dialogs from "./component/Dialogs/Dialogs.jsx";
import News from "./component/News/News.jsx";
import Friends from "./component/Friends/Friends.jsx"
import Communities from "./component/Communities/Communities.jsx"
import { BrowserRouter, Route } from 'react-router-dom';
const App = () => {
    return (
        <BrowserRouter>
        <div className="App-wrapper">
            <Header />
            <div className="navContent">
                <Nav />
                <Route path= "/Dialogs" component={ Dialogs}/>
                <Route path= "/Content" component={ Content}/>    
                <Route path="/News" component={ News}/>     
                <Route path="/Friends" component= { Friends }/>
                <Route path="/Communities" component={ Communities}/>     

            </div>
        </div>
        </BrowserRouter>
    )
}



export default App;
