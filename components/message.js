import styles from "../styles/chatroom.module.css"
import ProfilePicture from "./profilePicture"

export default function Message({content, username, usercolor}) {
    return (
        <div className={styles.message}>
            <div className={styles.header}>
                <ProfilePicture color={usercolor}/>
                <div className={styles.username}>{username}</div>
            </div>
            <div className={styles.content}>{content}</div>
        </div>
    )
}