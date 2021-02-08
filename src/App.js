import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./components/Home";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NotFound from "./components/NotFound";
import Navbar from './components/Navbar';
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import HomeLogin from './components/HomeLogin';


const App = () => {

    return (
        <Router>
            <div className="container">
                <HomeLogin />
                <Navbar />
            </div>
                <Route exact path="/" component={Home} />
                <Route path="/logowanie" component={LoginPage} />
                <Route path="/rejestracja" component={RegisterPage} />
                {/* <Route component={NotFound} /> */}
        </Router>
    )
};

 
export default App;