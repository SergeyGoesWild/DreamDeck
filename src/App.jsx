import { useEffect } from 'react'
import './App.css'

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

    </>
  )
}

export default App
