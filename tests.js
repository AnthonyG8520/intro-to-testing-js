// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


describe("sayHello", function() {
    it("should be a function", function () {
        expect(typeof sayHello).toBe("function");
    })
    it("should return a string", function(){
        expect(typeof sayHello()).toBe("string");
    })
    it("should return the string Hello, Jane", function(){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    })
    it("should return the string Hello, Alex!", function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    })
    it("should return the string Hello, pat!", function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    })
    it("should return the string Hello, World!", function(){
        expect(sayHello()).toBe("Hello, World!");
    })
})




//syntax:
//describe("name of function being tested", function(){
//    it ("should describe what you're specifically testing", function(){
//        expect(something from the function).jasmineMethod("actual"+ "expected output here")
//    })
//});

//Examples
describe("double", function(){
    it ("should return a number", function(){
        expect(typeof double()).toBe("number")
    })
})


describe("double", function(){
    it ("should be a function", function(){
        expect(typeof double).toBe("function")
    })
})

describe("double", function(){
    it ("should return double", function(){
        expect(double(5)).toEqual(10);
    })
})
