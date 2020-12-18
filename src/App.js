import React, {useState} from 'react';
import Home from "./Home";
import {Redirect, Route, Switch} from "react-router";
import LaunchPad from "./components/LaunchPad";
import MissionResult from "./components/MissionResult";
import Header from "./theme/Header";
import Footer from "./theme/Footer";

const App = () => {

    const [result, setResult] = useState({});

    return (
        <div className="App">
            <Header/>

            <Switch>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/play">
                    <LaunchPad setResult={setResult}/>
                </Route>
                <Route path="/result">
                    <MissionResult result={result}/>
                </Route>
                <Route path="/">
                    <Redirect to="/home"/>
                </Route>
            </Switch>

            <Footer/>
        </div>);
};
export default App;
