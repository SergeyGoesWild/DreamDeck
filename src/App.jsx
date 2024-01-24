import { useEffect } from 'react'
import FooterComponent from '../component/footer/footerComponent';
import './App.css'
import './Responsive.css'

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

      
      <footer>
        <FooterComponent />
      </footer>
    </>
  )
}

export default App
