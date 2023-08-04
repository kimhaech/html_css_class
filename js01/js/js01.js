let a = 10;
let b = 10.2;
let c = 'b';
let d = 100==10;
let e = null;
let f;

console.log('a', typeof(a)); // number
console.log('b', typeof(b)); // number
console.log('c', typeof(c)); // string
console.log('d', typeof(d)); // boolean
console.log('e', typeof(e)); // object
console.log('f', typeof(f)); //undefined
console.log('10/0',10/0); // Infinity
console.log('-10/0',-10/0); // -Infinity
console.log('aa/10','aa'/10); // NaN(not of number)

let t1 = [];
let t2 = {};
let t3 = function(){
    console.log('test');
};
let t4 = () => {};

console.log('t1', typeof(t1)); // object
console.log('t2', typeof(t2)); // object
console.log('t3', typeof(t3)); // function
console.log('t4', typeof t4); // function