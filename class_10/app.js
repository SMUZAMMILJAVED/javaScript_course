//                             // objects properties & methods

// var person_1={
//     name:'bilal',
//     id:123,
//     age:20,
//     isAlive:true,
//     hobbies:['cric','book reading'],
//     address:{street:40,houseNO:10},
//     greet:function(){
//         console.log("hello from ", this.name);
//     }
// }
// person_1.id=111;
// person_1.weight="70kg";
// delete person_1.age;
// console.log(person_1.hobbies[0]);
// console.log(person_1.address.street);
// person_1.greet();

                            // practice question 

// var batch_18=[{name:"bilal",id:1},{name:"usman",id:2},{name:"kaif",id:3}];
// batch_18.pop();
// batch_18.push({name:'new std',id:4});
// for(var i=0; i<batch_18.length;i++){
//     console.log(batch_18[i].name);
    
// }

                                  // constructor 

// manual method 
// function objCreator(name,id){
//     var std={
//         name:name,
//         id:id
//     }
//     return std;
// }
// var std_1=objCreator('bilal',20);
// var std_2=objCreator('usamn',10);
// var std_3=objCreator('kaif',30);
// console.log(std_1);
// console.log(std_2);
// console.log(std_3);


// built-in  method 

// function User(name,id){
//     this.name=name;
//     this.id=id;
//     this.greet=function(){
//         console.log("hello from ", this.name);
        
//     }
// }
// var std_2={
//     name:'ahmed',
//     id:30
// }

// var std_1=new User('ahsan',54);
// console.log(std_1 instanceof User);
// console.log(std_2 instanceof User);
// std_1.greet();
