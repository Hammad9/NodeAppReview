const express = require('express');

const router = express.Router();

//@desc Login/landing page
//@route Get/

router.get('/',(req,res)=>{
    res.send('Login')
})


//@desc DashBoard
//@route Get/ DashBoard

router.get('/dashboard',(req,res)=>{
    res.send('DashBoard')
})


module.exports=router;