const express = require("express");
const router = express.Router();

//localhost:3000/user/signin
router.get("/signin", (req, res) =>{
    res.render("signin")
});

//localhost:3000/user/login
router.get("/login", (req, res) =>{
    res.render("login")
});

router.post("/signin", (req,res) =>{
    const body = req.body
    let userS = body.usS;
    let emailS = body.emS;
    let passwordS = body.pswS

    // console.log(userS,emailS,passwordS)

    res.redirect('/user/dashboard');
})

router.post("/login",(req, res) => {
    const body = req.body
    let emailL = body.emL;
    let passwordL = body.pswL;

    res.redirect('dashboard')
})
router.get('/dashboard', (req, res) => {
    res.render('dashboard');
})

module.exports = router;