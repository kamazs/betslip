const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.get(/^(.+)$/, (req,res)=>{
    console.log("static file requested: ", req.params);
    res.sendFile(__dirname + req.params[0]);
});

http.listen(3001, ()=>{
    console.log("Betslip server started. Listening on *:3001");
});

const initialOdds = [
    { id: 0, odd: 0.23},
    { id: 1, odd: 0.21},
    { id: 2, odd: 0.05},
    { id: 3, odd: 0.9},
    { id: 4, odd: 0.35},
    { id: 5, odd: 0.78},
    { id: 6, odd: 0.5},
    { id: 7, odd: 0.43}
];

io.on("connection", socket => {
    console.log("User connected!");
    io.emit("add", initialOdds);
    console.log("Initial odds emited from server: ", initialOdds);
});

var updateOdds = () => {
    let id = Math.floor(Math.random()*initialOdds.length);
    io.emit("update", {
        id: id,
        odd: Math.random()
    });
    console.log("Random update! id: ", id);
    setTimeout(updateOdds, Math.random()*10000)
}

updateOdds();