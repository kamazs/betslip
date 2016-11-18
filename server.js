const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const maxInterval = 2000;
const oddCount = 12;

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

let initialOdds = [];
for (let i = 0; i<oddCount; i++){
    initialOdds.push({
        id: i,
        odd: Math.random()
    });
}

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
    setTimeout(updateOdds, Math.random()*maxInterval)
}

updateOdds();