const express = require("express");
const router = express.Router();


router.get("/about",(req,res)=>{
    res.render("about.ejs")
});

router.get("/contact",(req,res)=>{
    res.render("contact.ejs")
})
 

module.exports = router;