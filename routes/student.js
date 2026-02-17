const express = require("express");
const router = express.Router();
const Student = require("../models/student.js")
const customError = require("../customError.js");
const isLoggedIn = require("../middleware.js");
const valid = require("../schema.js");


router.get("/",(req,res)=>{
    res.redirect("/home");
});

router.get("/home",isLoggedIn,async(req,res)=>{
    let students = await Student.find({"owner":req.user._id});
    res.render("./student/index.ejs",{students});
});

router.get("/user/:id",isLoggedIn,async(req,res,next)=>{
    let {id} = req.params;
    let user = await Student.findById(id);
    if(!user){
        next(new customError(404,"user not found"));
    }
    res.render("./student/show.ejs",{user});
});
router.get("/new",(req,res)=>{
    res.render("./student/create.ejs")
})
router.post("/new",isLoggedIn,async(req,res,next)=>{
    let {value,error} = valid.validate(req.body);
    if(error){
        next(new customError(404,error.details[0].message))
    }
    let {name,age,city,father_name,email,contact} = value;
    let user = {
        name:name,
        age:age,
        city:city,
        email:email,
        fatherName:father_name,
        contact:contact,
    }

    user.owner = req.user._id
    
    await Student.create(user)
    req.flash("msg"," New Student Created ");
    res.redirect("/home");
});

router.get("/edit/:id",isLoggedIn,async(req,res)=>{
    let {id} = req.params;
    let user = await Student.findById(id);
    res.render("./student/edit",{user});
});

router.put("/edit/:id",isLoggedIn,async(req,res)=>{
    let {id} = req.params;
    let user = await Student.findById(id);
    let {name,age,city, email,father_name,contact} = req.body;
    user.name = name;
    user.age = age;
    user.city = city;
    user.father_name = father_name;
    user.contact = contact;
    await user.save();
    req.flash("ed"," Edit Student Created ")
    res.redirect("/home")
});

router.delete("/delete/:id",isLoggedIn,async(req,res)=>{
    let{id} = req.params;
    await Student.findByIdAndDelete(id)
    req.flash("del"," Student Deleted ")
    res.redirect("/home")
});

module.exports = router;
