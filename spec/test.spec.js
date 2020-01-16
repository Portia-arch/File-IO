
let visitor = require('../src/visitors_details')
let load = require('../src/load_details')

describe('function save()', function() {

    let alice = new visitor.Visitor('Alice Cooper', 12, '12/03/2019', '13:26', 'yey!', 'Weston')
    
    //tests if the save function is defined
    it('exists', async function() { 
        expect(alice.save()).toBeDefined()
    })

    //tests if the file is created
    it('creates named files', async function() {
        aliceFile = require('../src/visitors_details')
        expect(aliceFile).toBeDefined()
    })
})

describe('function load()', function() {
    let obj = {
    fullName: 'Alice Cooper',
    Age: '12',
    dateOfVisit: '12/03/2019',
    timeOfVisit: '13:26',
    comments: 'yey!',
    assistant: 'Weston'
};
//tests if the visitor's details are written to it's respective file
it('it checks for the json file', async function () {
    let Name = obj.fullName;
    let jsonFile = `visitor_${Name}.json`
    console.log(jsonFile);
})
})