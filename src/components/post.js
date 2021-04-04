import React from 'react';



export default function Post(props) {
    const {user, profilePic } = props;

    const styles = {
        root: {
            display: "flex",
            flexDirection: "column",
            background: "white",
            margin: "10px",
            padding: "5px",
        },
        userInfo: {
            display: "flex",
            flexDirection: "row",
        },
        nameContainer: {
            fontWeight: "bold",
            margin: "2px",
        },
        picture: {
            height:"50px",
            width: "50px"
        },
        postContent: {
            display: "flex",
            textAlign: "left",
        }
        
    };
    return (
        <div style={styles.root}> 
            <div style={styles.userInfo}>
                <img src={profilePic} alt={'profile pic'} style={styles.picture}/>
               <p style={styles.nameContainer}>{user}</p>
            </div>
            <div style={styles.postContent}>
                {props.children}
            </div>
        </div>
    )
  }

