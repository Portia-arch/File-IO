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
            //    console.log('Saved!');
        });
        return (this);
    }
}

let alice = new Visitor('Alice Cooper', 12, '12/03/2019', '13:26', 'yey!', 'Weston')
alice.save();
// console.log(alice);

let bob = new Visitor('Bob Marley', 26, '1/06/2020', '08:26', 'Boring', 'Mpumelelo')
bob.save();
// console.log(bob); 

let charlie = new Visitor('Charlie Sheen', 91, '16/09/2019', '10:15', 'Yeeeeeeeeeeeey!!!!', 'Tadiwa')
charlie.save();
// console.log(charlie);

// exports.module = {
//     Visitor
// }