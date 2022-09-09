import { Server } from "socket.io"

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
            console.log("recieved message")
            if(message.content && message.user && message.user.name && message.user.color) {
                io.emit("messageSent", message)
                console.log("emitting message")
            }
        })
    });

    console.log("Setting up socket");
    res.end();
}
