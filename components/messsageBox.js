import React from "react";
import styles from "../styles/chatroom.module.css";

export default class MessageBox extends React.Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }

    submit() {
        var messageContent = this.inputRef.current.value;
        if(!messageContent) return;

        console.log(messageContent);

        
        this.inputRef.current.value = "";
    }

    render() {
        return (
            <form className={styles.messageBox} action="javascript:void(0);" onSubmit={this.submit.bind(this)}>
                <input className={styles.messageInput} type="text" placeholder="Message" ref={this.inputRef}/>
                <input type="submit" className={styles.messageSend} value="Send"/>
            </form>
        )
    }
}