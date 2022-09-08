import Head from "next/head";
import Script from "next/script";
import React from "react";
import Message from "../components/message";
import MessageBox from "../components/messsageBox";
import styles from "../styles/chatroom.module.css";
import io from "socket.io"

export default class Chatroom extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        var io = io();
    }

    

    render() {
        return (
            <>
                <Head>
                    <Script defer src="https://cdn.socket.io/4.4.1/socket.io.esm.min.js"/>
                </Head>
                <div className={styles.background}>
                    <div className={styles.middlePanel}>
                        <div className={styles.messagesContainer}>
                            <Message content="hello"></Message>
                            <Message content="hello you" self={true}></Message>
                            <Message content="hello you" self={true}></Message>
                            <Message content="hello you" self={true}></Message>
                            <Message content="hello you" self={true}></Message>
                            <Message content="hello you" self={true}></Message>
                            <Message content="hello you" self={true}></Message>
                            <Message content="hello you" self={true}></Message>
                            <Message content="hello you" self={true}></Message>
                            <Message content="hello you" self={true}></Message>
                            <Message content="hello me" self={true}></Message>
                            <Message content="hello me" self={true}></Message>
                            <Message content="hello me" self={true}></Message>
                        </div>
                        <MessageBox/>
                    </div>
                </div>
            </>
        )
    }
}