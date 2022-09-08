import Message from "../components/message";
import MessageBox from "../components/messsageBox";
import styles from "../styles/chatroom.module.css";

export default function Chatroom() {
    return (
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
    )
}