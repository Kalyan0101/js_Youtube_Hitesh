// console.log("Hello world")
// const mySym = Symbol("key1")
const mySym = Symbol("key1")

const obj = {
    name: "Kalyan",
    "full name": "Kalyan Naskar",
    age: "23",
    address: "Subhasgram",
    email: "naskarkalyan2@gmail.com",
    [mySym]: "mykey1"
    // [mySym]: "author"
};

// console.log(obj);
// console.log(obj.address);
// console.log(obj["name"]);
// console.log(obj["full name"]);
// console.log(`${obj.email} \n`);

// obj.email = "naskarkalyan2000@gmail.com"
// console.log(obj.email);


obj.greeting = function() {
    console.log(`Hello Js User, ${this.name}`);
    return(`Hello Js User`);
}
// obj.greeting();
// console.log(obj.greeting());

console.log(Object.values(obj));