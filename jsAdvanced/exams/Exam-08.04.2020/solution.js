const { describe }  = require('mocha');
const { assert }  = require('chai');

class Repository {
    constructor(props) {
        this.props = props;
        this.data = new Map();

        let id = 0;
        this.nextId = function () {
            return id++;
        }
    }

    get count() {
        return this.data.size;
    }

    add(entity) {
        this._validate(entity);
        let id = this.nextId();
        this.data.set(id, entity);
        return id;
    }

    getId(id) {
        if (!this.data.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }

        return this.data.get(id);
    }

    update(id, newEntity) {
        if (!this.data.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }

        this._validate(newEntity);
        this.data.set(id, newEntity);
    }

    del(id) {
        if (!this.data.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }

        this.data.delete(id);
    }

    _validate(entity) {
        //Validate existing property
        for (let propName in this.props) {
            if (!entity.hasOwnProperty(propName)) {
                throw new Error(`Property ${propName} is missing from the entity!`);
            }
        }

        //Validate property type
        for (let propName in entity) {
            let val = entity[propName];
            if (typeof val !== this.props[propName]) {
                throw new TypeError(`Property ${propName} is not of correct type!`);
            }
        }
    }
}

describe('Test' , function(){
    let instance = undefined;
 //  describe('constructor' , function(){
 //      it('constructor', ()=> { let properties = {
 //              name: "Nancho",
 //              age: "12",
 //              birthday: "12.03"
 //          };
 //          let instance = new Repository(properties);
 //          assert.deepEqual(instance.properties, properties)});
 //     
 //          

    describe('validate' , function(){
        it('validate property name', ()=> { let properties = {
                name: "Nancho",
                age: "12",
                birthday: "12.03"
            };
            let instance = new Repository(properties);
            let testObj = {
                    name: "Nancho",
                    age: "12",
                   id: "12.03"
                };
            assert.throw(()=> instance._validate(testObj), `Property birthday is missing from the entity!`);
            
            
    });
    it('validate property name', ()=> { let properties = {
            name: "Nancho",
            age: "12",
            birthday: "12.03"
        };
        let instance = new Repository(properties);
        let testObj = {
                name: 1,
                age: "12",
                birthday: "12.03"
            };
        assert.throw(()=> instance._validate(testObj), `Property name is not of correct type!`);
        
        
});

});
describe('validate' , function(){
   it('add', () => {
    let properties = {
               name: "string",
                age: "number",
                birthday: "object"
        };
        let instance = new Repository(properties);
        let testObj = {
                name: "Nans",
                age: 12,
                birthday: new Date(1998, 0, 7)
            };
            let test2 = {name: 'anastas' , age: 24, birthday: new Date(1997, 0, 7)}
        assert.equal(instance.add(testObj), 0)
        assert.equal(instance.add(test2), 1)
   })

});
describe('getId' , function(){
    it('getId not in map', () => {
        let properties = {
                   name: "string",
                    age: "number",
                    birthday: "object"
            };
            let instance = new Repository(properties);
            let testObj = {
                    name: "Nans",
                    age: 12,
                    birthday: new Date(1998, 0, 7)
                };
            instance.add(testObj);
            assert.throw(()=> instance.getId(3), `Entity with id: 3 does not exist!`)    
   
        });
      it('getId  in map', () => {
        let properties = {
                   name: "string",
                    age: "number",
                    birthday: "object"
            };
            let instance = new Repository(properties);
            let testObj = {
                    name: "Nans",
                    age: 12,
                    birthday: new Date(1998, 0, 7)
                };
            instance.add(testObj);
            assert.deepEqual(instance.getId(0), testObj)    
   
        });
});
describe('update' , function(){
    it('id not in map', () => {
        let properties = {
                   name: "string",
                    age: "number",
                    birthday: "object"
            };
            let instance = new Repository(properties);
            let testObj = {
                    name: "Nans",
                    age: 12,
                    birthday: new Date(1998, 0, 7)
                };
                let newEntity = { name: "Anastas", age: 33, birthday: new Date(1998, 0, 7)}
            instance.add(testObj);
            assert.throw(()=> instance.update(3,newEntity), `Entity with id: 3 does not exist!`)    
   
        });
      it('update id  in map', () => {
        let properties = {
                   name: "string",
                    age: "number",
                    birthday: "object"
            };
            let instance = new Repository(properties);
            let testObj = {
                    name: "Nans",
                    age: 12,
                    birthday: new Date(1998, 0, 7)
                };
                let newEntity = { name: "Anastas", age: 33, birthday: new Date(1998, 0, 7)}
            instance.add(testObj);
            instance.update(0,newEntity);
            assert.deepEqual(instance.getId(0), newEntity)    
   
        });
});
describe('del' , function(){
    it('del id not in map', () => {

        let properties = {
                   name: "string",
                    age: "number",
                    birthday: "object"
            };
            let instance = new Repository(properties);
          
             

        assert.throw(()=> instance.del(3), `Entity with id: 3 does not exist!`)
    });
    it('del id not in map', () => {

        let properties = {
                   name: "string",
                    age: "number",
                    birthday: "object"
            };
            let instance = new Repository(properties);
            let newEntity = { name: "Anastas", age: 33, birthday: new Date(1998, 0, 7)}
             instance.add(newEntity);
             instance.del(0)

        assert.throw(()=> instance.getId(0), `Entity with id: 0 does not exist!`)
    });
});

});