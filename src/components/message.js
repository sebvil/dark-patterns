import React from 'react';



export default function Message(props) {
    const {is_received, sender, senderInitials} = props;
    const styles = {
        root: {
            display: "flex",
            flexDriection: "row",
            alignItems: "flex-end",
            color: "white",
        },
        initials: {
          borderRadius: "50%",
          height: "2.5em",
          width: "2.5em",
          background: "blue",
          fontSize: "1em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "2px",
        },
        sender: {
            fontWeight: "bold",
        },
        message: {
            borderRadius: "5px",
            paddingRight: "8px",
            paddingLeft: "8px",
        },
        received: {
            background: "blue",
        },
        sent: {
            background: "green",
        }
    };

    if (is_received) {
        return (
            <div style={styles.root}>
                <div style={styles.initials}>{senderInitials}</div>
                <div style={{...styles.received, ...styles.message}}>
                    <p style={styles.sender}>{sender}</p>
                    {props.children}
                </div>
            </div>
        )
    } else {
        return (
            <div style={{...styles.root, alignSelf: 'flex-end'}}>
                <div style={{...styles.sent, ...styles.message}}>
                    <p style={styles.sender}>{sender}</p>
                    {props.children}
                </div>
            </div>
        )
    }
}

