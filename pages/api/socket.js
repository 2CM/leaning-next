import { Server } from "socket.io"

var messages = [];

export default function handler(req, res) {
    if (res.socket.server.io) {
        console.log("Already set up");
        res.end();
        return;
    }

    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    // Define actions inside
    io.on("connection", (socket) => {
        console.log("connection")
        socket.emit("ping")

        socket.on("ping", (data) => {
            console.log("ping! "+data);
        })

        socket.on("messageSent", (message) => {
            if(message.content && message.user && message.user.name && message.user.color) {
                io.emit("messageSent", message)
                messages.push(message);
                console.log("emitting message",message)
            }
        })

        socket.on("messageHistory", (chunk) => {
            console.log(messages)

            io.emit("messageHistory", messages.slice(-11,messages.length))
        })
    });

    console.log("Setting up socket");
    res.end();
}
