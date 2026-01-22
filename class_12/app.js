//browser control in js


// var currentUrl=window.location.href;
// console.log(currentUrl);


var isLogin = false;
function toLogin(){
    isLogin=true
    checkLogin()
}
function toLogout(){
    isLogin=false
    checkLogin()
}
function checkLogin(){
    if(isLogin){
    window.location.href='dashboard.html'
}else{
    window.location.href='login.html'
}
}

function assign(){
 window.location.assign('dashboard.html')
}
function replace(){
 window.location.replace('dashboard.html')
}
function reload(){
    // window.location.reload() //only page
    // window.location.reload(true) //server
    window.location.reload(false) //only page
}
function windowOpen(){
    // window.open() //blank
    window.open('dashboard.html')
}
function close(){
   window.close();
}
                // pop up example 


var popup;
function openPopUp(){
popup=window.open("","","width=300,height=200")
popup.document.write('<h1>hello world!</h1>')
}
function closePopUp(){
popup.close();
}