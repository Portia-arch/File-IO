
let {Visitor} = require('../src/visitors_details')
let load = require('../src/load_details')
const fs = require('fs');

let obj = {
    fullname: "Alice Cooper",
    age: "12",
    dateofvisit: "12/03/2019",
    timeofvisit: "13:26",
    comments: "yey!",
    nameofassistant: "Weston"
};
let visitor = new Visitor(
    obj.fullName,
    obj.Age,
    obj.dateofvisit,
    obj.timeofvisit,
    obj.comments,
    obj.nameofassistant)

describe('function save()', function() {

    let alice = new Visitor('Alice Cooper', 12, '12/03/2019', '13:26', 'yey!', 'Weston')
    
    //tests if the save function is defined
    it('exists', async function() { 
        expect(alice.save()).toBeDefined()
    });

    //tests if the file is created
    it('creates named files', async function() {
        aliceFile = new Visitor(obj.fullName, obj.Age, obj.dateofvisit, obj.timeofvisit, obj.comments,obj.assistant)
        expect(aliceFile.toString()).toBe(obj.toString())
    });

    //it reads the file
    it("should read the contents of the file", () => {
        fs.readFile('visitor_alice_cooper.json', 'UTF8', (err, data) => {
            if (err) { throw err }
            else {
                let Data = data
                expect(Data).toEqual(JSON.stringify(alice, null, 2))
            }
        });
    });

});