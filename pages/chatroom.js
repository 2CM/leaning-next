import React from "react";
import Message from "../components/message";
import MessageBox from "../components/messsageBox";
import styles from "../styles/chatroom.module.css";
import { io } from "socket.io-client";

var socket;

const nameGeneration = {
    adjectives: ["cool","awesome","stupid","screeching","epic","chaotic"],
    nouns: ["gamer","child","human","person","chatter","programmer"]
}

function generateUsername() {
    return (
        nameGeneration.adjectives[Math.floor(Math.random()*nameGeneration.adjectives.length)] + "-" +
        nameGeneration.nouns[Math.floor(Math.random()*nameGeneration.nouns.length)] +
        Math.round(Math.random()*10000)
    )
}

export default class Chatroom extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                name: generateUsername(),
                color: `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`,
            },
            messages: [
                //{content: "hi", user: {name: "gamer", color: "rgb(0,127,255)"}},
                //{content: "hello", user: {name: "you", color: "rgb(255,127,127)"}},
            ],
            chunk: 0,
            reachedTop: false
        }

        this.messagesContainer = React.createRef();
    }

    async componentDidMount() {
        await fetch("/api/socket");

        socket = io();

        socket.emit("ping", "owo");
        socket.emit("messageHistory", this.state.chunk);
        this.setState({chunk: this.state.chunk+1})

        socket.on("ping", function(data) {
            console.log("PONG!");
        })

        socket.on("messageHistory", (data) => {
            console.log(data);

            this.setState({messages: this.state.messages.concat(data.reverse()), reachedTop: false});
        })

        socket.on("messageSent", this.onReceive.bind(this));

        var messagesContainer = this.messagesContainer.current;

        messagesContainer.addEventListener("scroll", (e) => {
            var scrollPercentage = (-messagesContainer.scrollTop/(messagesContainer.scrollHeight-messagesContainer.clientHeight));

            console.log(scrollPercentage);

            if(scrollPercentage > 0.97) {
                console.log("top")

                if(!this.state.reachedTop) {
                    socket.emit("messageHistory", this.state.chunk);

                    this.setState({chunk: this.state.chunk+1, reachedTop: true})
                }
            }
        });
    }

    onSend(message) {
        console.log("sending "+message)

        socket.emit("messageSent", {content: message, user: this.state.user})
    }

    onReceive(message) {
        console.log(message,"recieved in receive function")

        console.log(this.state.messages, "messages")

        this.setState({messages: [message].concat(this.state.messages)})
    }

    render() {
        return (
            <>
                <div className={styles.background}>
                    <div className={styles.middlePanel}>
                        <div ref={this.messagesContainer} className={styles.messagesContainer}>
                            {
                                this.state.messages.map(message => {
                                    return (
                                        <Message content={message.content} username={message.user.name} usercolor={message.user.color}/>
                                    )
                                })
                            }
                        </div>
                        <MessageBox username={this.state.user.name} onSend={this.onSend.bind(this)}></MessageBox>
                    </div>
                </div>
            </>
        )
    }
}
