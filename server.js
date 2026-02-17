require("dotenv").config()
const express = require("express");
const app = express();
const path = require("path")
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const mo = require("method-override");
const session = require("express-session")
const flash = require("connect-flash");
const passport = require("passport")
const page = require("./routes/page.js");
const student = require("./routes/student.js");
const user = require("./routes/user.js")
port = process.env.PORT || 3000;

const DB = process.env.DB

async function main(){
    mongoose.connect(DB)
}
main().then(()=>{
    console.log("connection successfull")
}).catch((err)=>{
    console.log(err);
});

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"public")));
//method override

app.use(mo("_method"));
app.use(express.urlencoded({extended:true}));

app.use(session({
    secret:"this_secret",
    resave:false,
    resaveUninitialized:true,
   
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req,res,next)=>{
    res.locals.msg = req.flash("msg");
    res.locals.ed = req.flash("ed");
    res.locals.del = req.flash("del");
    res.locals.sucess = req.flash("sucess");
    res.locals.currUser = req.user;
    next();
})

app.use("/",page);
app.use("/",user);
app.use("/",student);

app.use((req,res)=>{
    res.status(404).render("error1.ejs")
});

app.use((err,req,res,next)=>{
    let{status=500,message="some error"} = err;   
    res.render("error.ejs",{status,message});
});

app.listen(port,function(){
    console.log("app is listening",port);
});