console.log("This is a ts file");
console.log("This is a ts file2");

const fun1 = () => {
let a:number =12;

const b:number= 10;

const add:number=a+b;

console.log(add);
return add;
}

// const returnAdd:string =fun1();
// console.log(returnAdd);

const addFun =(a:number,b:number)=> a+b;
const addFunReturn:number =addFun(1,2);
console.log(addFunReturn);


const subFun =(a:number,b:number) => a-b;
const subFunReturn:number = subFun(12,2);
console.log(subFunReturn);


