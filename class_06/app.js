
                          // nested for loop 

// var arr=[[1,2,3],['a','b','c']]
// for(var i=0;i<arr.length;i++){
//     for(var j=0;j<arr[i].length;j++){
// console.log(arr[i][j]);

//     }
// }

// for(var i=0;i<5;i++){
//     if(i===3){
//         continue;
//     }
//     console.log(i);
    
// }


// var userInput=prompt('write any thing')
// var arr=[[[1,2,3],['a','b','c']],[[4,5,6],['d','e','f']]]
// var flag=false;
// for(var i =0; i<arr.length;i++){
//     for(var j=0;j<arr[i].length;j++){
//         for(var k=0;k<arr[i][j].length;k++){
//             if(arr[i][j][k]==userInput){
// console.log('found',userInput);
// flag=true;
// break;
//             };
            
//         }
//     }
// }
// if(!flag){
//     console.log('not found!',userInput);
// }


// for(var i=0;i<5;i++){
//     var star=''
//     for(var j=0;j<=i;j++){
// star+=" *"
//     }
//     console.log(star);
    
// }

// changing case 
// var text='This is an Apple';
// text = text.toUpperCase();
// console.log(text);


// var cities=['karachi','lahore'];
// var city=prompt('enter city name',"Karachi");
// var found=false;
// for(var i=0;i<cities.length;i++){
//     if(city.toLowerCase()===cities[i].toLowerCase()){
//         console.log("found");
//         found=true;
//         break;
//     }
// }
// if(!found){
//     console.log("not found!");
    
// }

              // measuring length and extracting parts from string 
// var text='this is an apple';
// console.log(text.length); //length 
// console.log(text.slice(11,16)); //extract


                        // finding segment 

// var text='this is an apple';
// console.log(text.indexOf("a"));

// console.log(text.lastIndexOf('a'));

                      // find character

// var text='this is an apple';
// console.log(text.charAt(text.length - 1));

//replace 
// var text='this is an apple';
// text = text.replaceAll("a","new");
// console.log(text);

                 // round/floor/ceil numbers 

// var num=7.9;
// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));


                  //generate random number
// var num=Math.ceil(Math.random()*5);
// console.log(num);

// var num=Math.ceil(Math.random()*10);
// var guess=+prompt("enter number between 1 to 10",num);
// if(guess===num){
//     console.log("win!");
    
// }
// else if(num +1 ===guess || num -1 ===guess){
// console.log("close number is",num);

// }

// else{
//     console.log("loose! num is",num);
    
// }
                      // convert string to number/decimal
// var num ='23.99';
// num=parseFloat(num);
// console.log(num);

                     // convert number to string

// var num=89;
// console.log(num.toString()+2);

                         // decimal fixed 

// var num =9.11857504584;
// console.log(num.toFixed(2));

                              //  date 

// var date=new Date();
// console.log(date.getTime());
    
// var days=['sun','mon','tue','wed','thurs','fri','sat'];
// console.log(days[date.getDay()]);


// var date=new Date();
// var doomsDay=new Date('30 june 2035');
// var result=doomsDay.getTime() - date.getTime();
// console.log(result/1000/60/60/24/365);
    
// var date=new Date();
// date.setTime(0);
// console.log(date.getTime());

                        //function
// function hello(a){
//     a+5;
//     return true;
// }
// function print(){
//     console.log("hello");
    
// }function add(a,b){ //parameters
//     return a+b;
    
// }
// function square(a){
// return a**2;
// }
// console.log(print());

// var result=add(5,5);
// console.log(result);

// var r=square(9);
// console.log(r);

// add(6,7);
// add(2,2);//aurguments
// console.log(hello(5));
