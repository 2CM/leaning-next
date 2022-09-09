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

        setTimeout(() => {
            console.log("pinged")
            socket.emit("ping");
        },2000)

        socket.on("ping", (data) => {
            console.log("ping! "+data);
        })

        socket.on("messageSent", (message) => {
            console.log(message)
        })
    });

    console.log("Setting up socket");
    res.end();
}
