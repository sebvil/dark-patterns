import logo from './logo.svg';
import './App.css';
import Page1 from './pages/page1';
import { useState } from 'react';

function App() {
  const [messenger, setMessenger] = useState("social media");
  const [madePurchase, setMadePurchase] = useState(false);
  const [madeInfluencerPurchase, setMadeInfluencerPurchase] = useState(false);
  const [page, setPage] = useState(0);
  const [nextDisabled, setNextDisabled] = useState(true);

  const handleMoveToPageOne = () => {
    setPage(page);
  }
  const handleNextPressed = () => {
    setPage(page + 1);
    setNextDisabled(true);
  }

  const handleNextDisabledChange = () => {
    setNextDisabled(false);
  }

  const handleMadePurchaseChange = () => {
    setMadePurchase(!madePurchase);
  }

  const handleMadeInfluencerPurchaseChange = () => {
    setMadePurchase(!madeInfluencerPurchase);
  }

  return (
    <div className="App">
      <Page1 handleNextDisabledChange={handleNextDisabledChange}
        handleMadePurchaseChange={handleMadePurchaseChange}
      />
      <button onClick={handleNextPressed} disabled={nextDisabled}>Next</button>
    </div>
  );
}

export default App;
