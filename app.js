console.log("This is a ts file");
console.log("This is a ts file2");
var fun1 = function () {
    var a = 12;
    var b = 10;
    var add = a + b;
    console.log(add);
    return add;
};
// const returnAdd:string =fun1();
// console.log(returnAdd);
var addFun = function (a, b) { return a + b; };
var addFunReturn = addFun(1, 2);
console.log(addFunReturn);
var subFun = function (a, b) { return a - b; };
var subFunReturn = subFun(12, 2);
console.log(subFunReturn);
