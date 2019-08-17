const express = require('express');

const Router = express.Router();

const {mongo:{find}} = require('../mongodb');
const {formatData} = require('../utils')

Router.get('/',async (req,res)=>{
    

    let result = await find('navlist');console.log(result)
    res.send(result);

    let data = await insert('navlist',req.body);

    res.send(formatData())

    
})

// Router.get('/detail',async (req,res)=>{
    
//     let {id}=req.query;
//     console.log(id);
//     let data = await find('navlist',{
//         id
//     });
//     console.log(data);
//     res.send(formatData())
// })

module.exports = Router;