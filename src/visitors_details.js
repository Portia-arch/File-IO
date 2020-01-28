'use strict';
const fs = require('fs');

class Visitor {
    constructor(Name, Age, Visit_date, Time, Comments, Assistant) {
        this.fullName = Name;
        this.Age = Age;
        this.dateOfVisit = Visit_date;
        this.timeOfVisit = Time;
        this.comments = Comments;
        this.assistant = Assistant;
    }
    async save() {

        let name = this.fullName.replace(' ', '_').toLowerCase();

        fs.writeFile(`visitor_${name}.json`, JSON.stringify(this, null, 2), function (err) {
            if (err) throw err;
               console.log('Saved!');
        });
        return (this);
    }
}


async function load(fullName) {

    const fs = require('fs');
    let name = fullName.replace(' ', '_').toLowerCase();

    fs.readFile(`visitor_${name}.json`, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        else {
            console.log(data);
        }
    });
}


module.exports = {
    Visitor
}