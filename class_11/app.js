                // // constructor 

// function User(name,id){
//     this.name=name;
//     this.id=id;
// }

          // // method in prototype

// User.prototype.greet=function(){
//         console.log(this.name+' says hello !');
        
//     }

            // // creating objects 

// var std_1=new User('rehan',90);
// var std_3=new User('rehan1',90);
// var std_2=new User('rehan2',90);

                   // // log 

// console.log(std_1);
// std_3.greet()

         // premetive values (copy by value)

// var a=3;
// var b=a;
// b++;
// console.log(a);
// console.log(b);


// var a=false;
// var b=a;
// b=true
// console.log(a);
// console.log(b);

               // non premetive (copy by address)
                 
// var a=[4];
// var b=a;
// b[0]=6;
// console.log(a);
// console.log(b);

// var a={num:4};
// var b=a;
// b.num=6;
// console.log(a);
// console.log(b);

              // loop in objects 
// var obj={
//     name:'rehan',
//     id:124,
//     dob:'25 - sep - 2002',
//     "background-color":'yellow',
//     5245:6543,
//     false:'test',
//     "@56#":'test 2'

// }

// for(var key in obj){
//     console.log(key+" : "+obj[key]);
    
// }


        // dot notation and   [ ] notation 


// var obj={num:5,id:1343};
// console.log(obj.num);
// console.log(obj['id']);

             // hasOwnProperty and in  
// var obj={num:5,id:1343};
// console.log('valueOf' in obj);//check obj and prototype 
// console.log(obj.hasOwnProperty('valueOf')); //check only obj 
// console.log(obj);

