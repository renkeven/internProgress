//Variables

//declare a variable, end with a semicolon
//always have a semi-colon

var name = "keven";

//different datatypes of variables

var age = 17;       //int
var age2 = "23";    //str
var pi = 3.14;      //float

//keep in mind of different datatypes
3.0 !== 3;
//> false

// === is strict equality, compares datatype
// == is loose equality
3==='3';
//>false

3=='3';
//>true

//try to remember to declare new variables with a var, else you end up renaming previous variables up the scope;

    // var foo = "I'm global";
    // var bar = "So am I";

    // function () {
    //     var foo = "I'm local, the previous 'foo' didn't notice a thing";
    //     var baz = "I'm local, too";

    //     function () {
    //         var foo = "I'm even more local, all three 'foos' have different values";
    //         baz = "I just changed 'baz' one scope higher, but it's still not global";
    //         bar = "I just changed the global 'bar' variable";
    //         xyz = "I just created a new global variable";
    //     }
    // }

//defining an object is like, and you can reference its properties with a '.'
obj = {"key" : "value", "key2" : "value2"};
obj.key
//>"value"
obj.key2
//>"value2"

//a neater way could be
obj = {
    "key": "value",
    "age": 27.2,
    "color": "red",
}

//an array is a list, using hard brackets, []
arr = ['keven', 'kev', 1, 3, 'hello']

//call it as you do in python, arr[1], arr[2]. in js, arrays are zero-indexed.
arr[0];
//>'keven'

//in js if you access an element outside of the array, then you would result in undefined
array[3] === undefined;
//>True

