// const http = require("http")
// const port = 3000;


// const server = http.createServer((req, res) =>{
//     res.write("hello world of Backend now!!")
//     res.end()
// })

// server.listen(port, () => {
//  console.log(`server running on port ${port}`)
// });

const express = require("express");
const router = express.Router();
const app = express();
const port = 3000;


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");


function middle_ware(req,res, next){
    next()
}

//localhost:3000
app.get("/", middle_ware, (req,res) =>{
    res.redirect("/user/signin");
})

// app.use("/login", require("../creatingServer/routes/login"));
app.use("/user", require("./routes/index.js"));


app.listen(port, () => {
    console.log(`server running on port ${port}`);
})