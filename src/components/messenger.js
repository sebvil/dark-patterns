import React from 'react';
import Header from './header.js';
import Phone from './phone.js';

function Messenger(props) {
  // Declare a new state variable, which we'll call "count"
  const { messengerColor, sender } = props;
  const style = {
    sendBar:  { 
      width: '260px', 
      height: '30px', 
      backgroundColor: '#656970',
      paddingTop: '5px',
      paddingBottom: '5px',
      padding: 0,
    },
    input: {height: '20px', width: '75%'},
    root: {
        display: "flex",
        flexDirection: "column",
        background: "LightGray",
        height: "100%",
        width: "100%",
        overflow: "hidden",
    },
    bottom: {
      position: 'absolute', 
      bottom: 0, 
      padding: 0, 
      margin: 0, 
      display: "flex", 
      flexDirection: "column"
    },
    sendButton: {height: '26px', borderRadius: "5px", color: 'white',backgroundColor: messengerColor},    
  }
  return (
    <Phone>
      <div style={style.root}>
        <Header color={messengerColor}>{sender}</Header>
        <div style={{position: 'relative', height: '100%', padding: 0, margin: 0}}>
          <div style={style.bottom}>
          {props.children}
          <p></p>
          <div style={style.sendBar}>
            <input style={style.input} type="text" placeholder={"Aa"} onClick={() => {}}/>
            <button style={style.sendButton}>Send</button>
          </div>
          </div>
        </div>
        </div>
    </Phone>
  );
}
export default Messenger;