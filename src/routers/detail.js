const express = require('express');

const Router = express.Router();

const {mongo:{find}} = require('../mongodb');
const {formatData} = require('../utils')

Router.get('/',async (req,res)=>{
    
    let {id}=req.query;
    console.log(id); 
    let data = await find('navlist',{
        id:`${id}`
    });
    console.log(data);
    res.send(JSON.stringify(data))
    // res.send(formatData(JSON.stringify(data)))
})

module.exports = Router;