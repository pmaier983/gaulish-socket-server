const cors = require("cors")
const express = require("express")
const app = express()
app.use(cors())
const http = require("http")
const server = http.createServer(app)

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
})

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

io.on("connection", (socket) => {
  console.log("a user connected")
})

server.listen(3001, () => {
  console.log("listening on *:3001")
})
