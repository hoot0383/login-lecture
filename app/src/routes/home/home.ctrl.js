"use strict";




const output = {
    home: (req,res) => {
        res.render("home/index");
    },
    login: (req,res) => {
        res.render("home/login");
    },
};

const users = {
    id: ["woorimit", "나개발", "김팀장"],
    psword: ["1234", "1234", "123456"]
};

const process = {
    login: (req,res) => {
        const id = req.body.id,
            psword = req.body.psword;
        
        console.log(id, psword);
        
    },
};


module.exports = {
    output,
    process,
};