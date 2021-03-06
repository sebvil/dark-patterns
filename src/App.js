import logo from './logo.svg';
import './App.css';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page6 from './pages/page6';
import Page5 from './pages/page5';
import Page8a from './pages/page8a';
import Page8b from './pages/page8b';
import Welcome from './pages/welcome';
import { useState } from 'react';
import Page4 from './pages/page4';

function App() {
  const [messenger, setMessenger] = useState("social media");
  const [madePurchase, setMadePurchase] = useState(false);
  const [madeInfluencerPurchase, setMadeInfluencerPurchase] = useState(false);
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

  } else if (page == 0) {
    return (
      <div className="App">
        <Welcome startGame={handleNextPressed}/>
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
  } else if (page == 4) {
    return (
      <div className="App">
        <Page4 handleNextDisabledChange={handleNextDisabledChange}
          setStatus={setStatus}
          messenger={messenger}
        />
      </div>
    )
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
  } else if (page == 3) {
    return (
      <div className="App">
        <Page5/>
        <button onClick={handleNextPressed}>Next</button>
      </div>
    );
  }

  
}

export default App;
