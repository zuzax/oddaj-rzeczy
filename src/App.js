import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from "./components/NotFound";
import Navbar from './components/Navbar';
import HomeLogin from './components/HomeLogin';


const App = () => {

    return (
        <Router>
            <div className="container">
                <HomeLogin />
                <Navbar />
            </div>
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
        </Router>
    )
};

 
export default App;