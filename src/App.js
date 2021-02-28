import {useEffect, useState} from 'react';
import './App.css';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <div>
        <Header></Header>
        <CountryDetails></CountryDetails>
      </div>
    </div>
  );
}

export default App;
