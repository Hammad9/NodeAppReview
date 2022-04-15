const express = require('express');

const router = express.Router();

//@desc Login/landing page
//@route Get/

router.get('/',(req,res)=>{
    // res.send('Login')
    res.render('login',{
        layout:'login'
    })   //here we call file of login which is in view
})


//@desc DashBoard
//@route Get/ DashBoard

router.get('/dashboard',(req,res)=>{
    // res.send('DashBoard')
    res.render('dashboard')   //Here we call file of Dashboard
})


module.exports=router;