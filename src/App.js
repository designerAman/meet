import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing/Routing'
import NavbarComponent from './components/NavbarComponent/NavbarComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
