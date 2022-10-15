let express = require("express");

let app = express();



app.use(express.urlencoded());


app.use("/",(req,res) => {
    console.log("requests:: <ip: "+req.ip + "> headers: "+JSON.stringify(req.headers))
    res.send(req.method + "\n" + JSON.stringify(req.query) + "\n" + JSON.stringify(req.body));
})



app.listen(process.env.PORT);

console.log("now listen at "+process.env.PORT);