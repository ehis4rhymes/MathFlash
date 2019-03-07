function addition(){
      var yourAnswer = document.getElementById("answer").value;
	  isNaN(yourAnswer);
	  if(isNaN(yourAnswer)){
		   document.getElementById("output").innerHTML = "Hey! " + yourAnswer + " is not a Number. Please enter a Number.";
	  } else {
          if ( yourAnswer == correctAnswer){
              document.getElementById("output").innerHTML = "correct  " + numOne + "  +  " + numTwo + "  =  " +  correctAnswer;
          } else {
              document.getElementById("output").innerHTML = "incorrect  " + numOne + "  +  " + numTwo + "  =  " +  correctAnswer + ",   not  " + yourAnswer; 
          }  
	  }
}


function newCard(){
    document.getElementById("output").innerHTML = "";
    document.getElementById("answer").value = "";
    
     numOne = Math.floor(Math.random()* 10) + 1 ;
     numTwo =  Math.floor(Math.random()* 10) + 1;
     document.getElementById("inner_script").innerHTML = numOne + " + " + numTwo;
     correctAnswer = numOne + numTwo;
}