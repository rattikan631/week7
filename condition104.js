let  password ='p@ssword';
console.log(password.length); //8

if(password.length>=8 && password.includes('@')){
    let x = password.length;
    console.log("That password is mighty strong" + x);
    document.getElementById("demo").innerHTML="That password is mighty strong" + x;
}
else if (password.length>=8){
    let x = password.length;
    console.log("That password is strong enough" + x);
    document.getElementById("demo").innerHTML="That password is long enough" + x;
}