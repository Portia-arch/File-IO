
let {Visitor} = require('../src/visitors_details')
let load = require('../src/load_details')
const fs = require('fs');

let obj = {
    fullName: "Alice Cooper",
    Age: "12",
    dateOfVisit: "12/03/2019",
    timeOfVisit: "13:26",
    comments: "yey!",
    assistant: "Weston"
};
let visitor = new Visitor(
    obj.Name,
    obj.Age,
    obj.Visit_date,
    obj.Time,
    obj.Comments,
    obj.Assistant)

describe('function save()', function() {

    let alice = new Visitor('Alice Cooper', 12, '12/03/2019', '13:26', 'yey!', 'Weston')
    
    //tests if the save function is defined
    it('exists', async function() { 
        expect(alice.save()).toBeDefined()
    });

    //tests if the file is created
    it('creates named files', async function() {
        aliceFile = new Visitor(obj.fullName, obj.Age, obj.dateOfVisit, obj.timeOfVisit, obj.comments,obj.assistant)
        expect(aliceFile.toString()).toBe(obj.toString())
    });

    //it reads the file
    it('should read the contents of the file', async function() {
        fs.readFile('visitor_alice_cooper.json', 'UTF8', (err, data) => {
            if (err) { throw err }
            else {
                let content = JSON.parse(data)
                expect(content.fullName).toEqual('Alice Cooper')
                expect(content.Age).toEqual(12)
                expect(content.dateOfVisit).toEqual('12/03/2019')
                expect(content.timeOfVisit).toEqual('13:26')
                expect(content.comments).toEqual('yey!')
                expect(content.assistant).toEqual('Weston')
            }
        });
    });

    // it('checks  if data is saved into a file', async function(){
    //     let file = require(`visitor_alice_cooper.json`)

    //     console.log(typeof file)
    //     expect(file.name).toBe(obj.name)
    // });
});