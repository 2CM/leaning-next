import React from "react";
import styles from "../styles/chatroom.module.css"

export default class ProfilePicture extends React.Component {
    constructor(props) {
        super(props)

        this.divRef = React.createRef()
    }

    componentDidMount() {
        this.setColor();
    }

    componentDidUpdate() {
        this.setColor();
    }

    setColor() {
        this.divRef.current.style.background = this.props.color;
    }

    render() {
        return <div ref={this.divRef} className={styles.pfp}></div>
    }
}