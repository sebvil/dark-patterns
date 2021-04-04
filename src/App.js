import logo from './logo.svg';
import './App.css';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page6 from './pages/page6';
import Page5 from './pages/page5';
import Page8a from './pages/page8a';
import Page8b from './pages/page8b';
import { useState } from 'react';

function App() {
  const [messenger, setMessenger] = useState("social media");
  const [madePurchase, setMadePurchase] = useState(false);
  const [madeInfluencerPurchase, setMadeInfluencerPurchase] = useState(false);
  // i changed this
  const [page, setPage] = useState(0);
  const [nextDisabled, setNextDisabled] = useState(true);
  const [status, setStatus] = useState("");

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
<<<<<<< HEAD
  } else if (page == 0) {
=======

  } else if (page == 1) {
>>>>>>> da46b969d7ec98a31463aab7dad2848d4fa6234e
    return (
      <div className="App">
        <Page1 handleNextDisabledChange={handleNextDisabledChange}
          handleMadePurchaseChange={handleMadePurchaseChange}
          setStatus={setStatus}
        />
      </div>
    );
  }  else if (page == 1) {
    return (
      <div className="App">
        <Page1 handleNextDisabledChange={handleNextDisabledChange}
          handleMadePurchaseChange={handleMadePurchaseChange}
          setStatus={setStatus}
        />
      </div>
    );
  }  else if (page == 2) {
    return (
      <div className="App">
        <Page2
          handleNextDisabledChange={handleNextDisabledChange}
          handleMadePurchaseChange={handleMadePurchaseChange}
          madePurchase={madePurchase}
          setStatus={setStatus}
        />
      </div>
    );
  }  else if (page == 4) {
    return (
      <div className="App">
        <Page5/>
        <button onClick={handleNextPressed}>Next</button>
      </div>
    );
  } 

  
}

export default App;
