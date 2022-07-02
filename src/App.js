import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Showcase from './components/Showcase/Showcase'

const App = () => {
    return ( 
        <Router>
            <Routes>
                <Route exact path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='showcase' element={<Showcase />} />
                    <Route path='contact' element={<Contact />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;