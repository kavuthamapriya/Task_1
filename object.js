// create a obj and prints all the values in object

const myObj = {
  name : "john",
  age:20,
  dept :"CSE",
  favColor:"green",
  reg:19

};

for(let key in myObj){
  console.log(myObj[key]);
}


//delete a key in object

delete myObj.reg;
console.log(myObj);



