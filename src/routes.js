import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Login from "./components/Login";
import './App.css';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<div>
                <NavLink to="/login"><h1>Welcome</h1></NavLink></div>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Router>
    )
}

export default App;