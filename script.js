function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var result = document.getElementById("result");
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
            
   
    if(principal<=0){
          alert("Enter a positive number")
          return;
    }
    else {      
        document.getElementById("result").innerHTML= principal;
        document.getElementByID("result1").innerHTML= rate;
        document.getElementByID("result2").innerHTML= interest;
        document.getElementByID("result3").innerHTML= year;
        
// Updates output values if the rate slider is adjusted
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        
