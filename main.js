const Name  =  prompt("enter your name");
const password = +prompt("enter your password");
const id = +prompt("enter your id");




     const mars = {
    ism:"Dilmuhammad",
    login:123456789,
    id:123456,
}
 

console.log(mars);

 if(login === mars.login && password === mars.password) {
    alert(`${mars.ism}marsga hush kelibsiz`)
 }
 else if(login === 0 || password == 0){
    alert("login va password kiritmadiz")
 }

 else{
    alert("Login va parol noto'g'ri kiritildi")
 }
    