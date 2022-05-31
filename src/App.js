import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <router>
      <Navbar />
      <switch>
        <route path='/' exact />
      </switch>
    </router>
    </>
  );
}

export default App;
