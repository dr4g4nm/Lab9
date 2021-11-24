const grades = document.getElementById("grades");
grades.addEventListener("click", Subjects);
function Subjects(){
  let numSubjects = parseInt(prompt("How many subjects you take?"));
  let num = 0, results = [numSubjects], output = document.getElementById("output");

  output.innerHTML = "";
  for(i = 0; i < numSubjects; i++){
    results[i] = parseInt(prompt("What mark you got for course " + (i + 1) + "? (1-10)"));
  }
  for(i = 0; i < numSubjects; i++){
    output.innerHTML += "Result " + (i + 1) + " : " + results[i] + "<br>";
    console.log("Result " + (i + 1) + " is: " + results[i]);
    num = num + results[i];
    if(results[i] >=8 && results[i] <= 10){
      output.innerHTML += "Grade : A" + "<br>";
    } else if(results[i] >=7 && results[i] < 8  ){
      output.innerHTML += "Grade : B" + "<br>";
    } else if(results[i] >=5 && results[i] < 7){
      output.innerHTML += "Grade : C" + "<br>";
    } else if(results[i] >=4 && results[i] <= 5){
    output.innerHTML += "Grade : D" + "<br>";
    } else if(results[i] >= 0 && results[i] < 4){
      output.innerHTML += "Grade : F" + "<br>";
    } else{
      output.innerHTML += "Inncorrect grade, please enter 0-10" + "<br>";
    }
  }
}
