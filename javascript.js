//Display box
let output = document.getElementById("output");

//Button
let go = document.getElementById("run");

//Numbers given by the user as strings
let side1 = document.getElementById("side1");
let side2 = document.getElementById("side2");

//Variables to turn strings into numbers
let num1; 
let num2;

//Checkbox
let hyp = document.getElementById("hyp");

//When button is clicked
go.onclick = function(){
  
  //Turn strings into integers
  num1 = parseFloat(side1.value);
  num2 = parseFloat(side2.value);
  
   //Make sure all values are positive
   if (num1 < 0 || num2 < 0){
    output.style.border="1px solid black";
    output.style.width="15rem";
    output.style.height="8rem";
    output.innerHTML = "<h1>Please only use positive values</h1>"
  }else if (hyp.checked == true){
    //Pythagorean Theorem
    let answer = Math.round(((num1**2) + (num2**2))**0.5 * 100)/100;
    //Variable to turn answer to string
    let txtAns = answer.toString();
    //Display answer
    output.style.border="4px solid black";
    output.style.width="15rem";
    output.style.height="3rem";
    output.innerHTML = "<h2>" + txtAns + "</h2>";
  }else{
    //Checks for greater side/hypotenuse
    if(num1 > num2){
      //Pythagorean Theorem
      let answer = Math.round(((num1**2) - (num2**2))**0.5 * 100)/100;
      //Variable to turn answer to string
      let txtAns = answer.toString();
      //Display answer
      output.style.border="4px solid black";
      output.style.width="15rem";
      output.style.height="3rem";
      output.innerHTML = "<h2>" + txtAns + "</h2>";
    }else if(num2 > num1){
      //Pythagorean Theorem
      let answer = Math.round(((num2**2) - (num1**2))**0.5 * 100)/100;
      //Variable to turn answer to string
      let txtAns = answer.toString();
      //Display answer
      output.style.border="4px solid black";
      output.style.width="15rem";
      output.style.height="3rem";
      output.innerHTML = "<h2>" + txtAns + "</h2>";
    }else{
      //Display message
      output.style.border="1px solid black";
      output.style.width="20rem";
      output.style.height="10rem";
      output.innerHTML = "<h1>Remember that the hypotenuse is the largest side</h1>";
    }//End check for larger side
    
  }//End check for hypotenuse
  
}//End function