import { useEffect } from 'react'
import './App.css'
import Header from './components/Header';

function App() {

  const url = "https://api.tcgdex.net/v2/en/cards";

  useEffect(() => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result);
      })
  }, []);

  return (
    <>
      <Header />
    </>
  )
}

export default App
