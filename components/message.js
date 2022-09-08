import styles from "../styles/chatroom.module.css"

export default function Message({content, self}) {
    return (
        <div className={styles.message}>
            <div className={styles.header}>
                <div className={`${styles.pfp} ${self ? styles.self : null}`}></div>
                <div className={styles.username}>{self ? "You" : "User"}</div>
            </div>
            <div className={styles.content}>{content}</div>
        </div>
    )
}