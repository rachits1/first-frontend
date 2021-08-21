import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch><Route path='/' exact component={Home}/></Switch>
        <Switch><Route path='/about' exact component={About}/></Switch>
        <Switch><Route path='/contact' exact component={Contact}/></Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
