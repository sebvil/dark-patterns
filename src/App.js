import logo from './logo.svg';
import './App.css';
import Page1 from './pages/page1';
import { useState } from 'react';
import Page4 from './pages/page4';

function App() {
  const [messenger, setMessenger] = useState("social media");
  const [madePurchase, setMadePurchase] = useState(false);
  const [madeInfluencerPurchase, setMadeInfluencerPurchase] = useState(false);
  const [page, setPage] = useState(4);
  const [nextDisabled, setNextDisabled] = useState(true);
  const [status, setStatus] = useState("");

  const handleNextPressed = () => {
    setPage(page + 1);
    setNextDisabled(true);
  }

  const handleNextDisabledChange = () => {
    setNextDisabled(false);
  }

  const handleGoBack = () => {
    setNextDisabled(true);
  }

  const handleMadePurchaseChange = () => {
    setMadePurchase(!madePurchase);
  }

  const handleMadeInfluencerPurchaseChange = () => {
    setMadePurchase(!madeInfluencerPurchase);
  }


  if (!nextDisabled) {
    return (
      <div>
        <p>{status}</p>
        <button onClick={handleNextPressed}>Next</button>
        <button onClick={handleGoBack} disabled={nextDisabled}>Change your selection</button>

      </div>
    )
  } else if (page == 1) {
    return (
      <div className="App">
        <Page1 handleNextDisabledChange={handleNextDisabledChange}
          handleMadePurchaseChange={handleMadePurchaseChange}
          setStatus={setStatus}
        />
      </div>
    );
  } else if (page == 4) {
    return (
      <div className="App">
        <Page4 handleNextDisabledChange={handleNextDisabledChange}
          setStatus={setStatus}
          messenger={messenger}
        />
      </div>
    )
  }

  
}

export default App;
