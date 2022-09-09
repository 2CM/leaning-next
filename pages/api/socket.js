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

        io.on("ping", (data) => {
            console.log("ping! "+data);
        })

        io.on("messageSent", (message) => {
            console.log(message.content)
        })
    });

    console.log("Setting up socket");
    res.end();
}
