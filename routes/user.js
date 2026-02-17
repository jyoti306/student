const express = require("express");
const router = express.Router();
const localstrategy = require("passport-local");
const abc = require("../models/abc.js");
const passport = require("passport");
const { func } = require("joi");


passport.use(new localstrategy(abc.authenticate()));
passport.serializeUser(abc.serializeUser());
passport.deserializeUser(abc.deserializeUser());


router.get("/signup",(req,res)=>{
    res.render("./user/signup.ejs")
});

router.post("/signup",async(req,res,next)=>{
    let {username,password} = req.body;
    if(!username || !password){
        res.send("info required")
    }
    const user = new abc({
        username,
    })
    let newUser = await abc.register(user,password);
    req.login(newUser,(err)=>{
        if(err){
            next(err)
        }
        res.redirect("/home");
    })
    
});



router.get("/login",(req,res)=>{
    res.render("./user/login.ejs")
})
router.post("/login",
    passport.authenticate("local",{
        successRedirect:"/home",
        failureRedirect:"/login"
    })
);

router.get("/logout",(req,res,next)=>{
    req.logout(function(err){
        if(err){return next(err);}
        res.redirect("/home");
    });
});

module.exports = router;