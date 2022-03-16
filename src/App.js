import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

// load countries data and create a component called LoadCountries
function LoadCountries() {
  const [countries, setCountries] = useState([]);
  console.log(countries);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, [])
  return (
    <div>
      <h1>Visiting Every Country of the World !</h1>
      <h3>Available Countries: {countries.length}</h3>
    </div>
  )
}

export default App;
