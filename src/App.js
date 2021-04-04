import logo from './logo.svg';
import './App.css';
import Page1 from './pages/page1';
import { useState } from 'react';

function App() {
  const [messenger, setMessenger] = useState("social media");
  const [madePurchase, setMadePurchase] = useState(false);
  const [madeInfluencerPurchase, setMadeInfluencerPurchase] = useState(false);
  const [page, setPage] = useState(1);
  const [nextDisabled, setNextDisabled] = useState(false);

  const handleNextPressed = () => {
    setPage(page + 1);
    setNextDisabled(true);
  }

  const handleNextDisabledChange = () => {
    setNextDisabled(false);
  }

  return (
    <div className="App">
      <Page1 handleNextChange={handleNextDisabledChange}/>
      <button onClick={handleNextPressed} disabled={nextDisabled}>Next</button>
    </div>
  );
}

export default App;
