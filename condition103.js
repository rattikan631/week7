let mark = 79;
if(mark >= 80 && mark <=100){
    console.log("Grade A");
    document.getElementById("demo").innerHTML="Grade A";
}
else if(mark >= 70 && mark <= 80){
    console.log("Grade B");
    document.getElementById("demo").innerHTML="Grade B"
}
else{
    console.log("Error");
    document.getElementById("demo").innerHTML="Error";
}