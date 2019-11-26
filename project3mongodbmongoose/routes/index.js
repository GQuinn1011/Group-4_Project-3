console.log('routes connected');
const router = require("express").Router()

router.get("/", (req,res)=>{
    res.send("the html is connected")
})

module.exports=router;