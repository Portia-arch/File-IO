'use strict'


async function load(fullName){

    const fs = require('fs');
    let name = fullName.replace(' ', '_').toLowerCase();

    fs.readFile(`visitor_${name}.json`, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        else{
            console.log(data);
            }
    });
}

load("Alice Cooper");

 exports.module = {
     load
 }