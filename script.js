function compute()
{
    var principal = document.getElementById("principal").style.backgroundColor="yellow".value;
    var rate = document.getElementById("rate").style.backgroundColor="yellow".value;
    var years = document.getElementById("years").style.backgroundColor="yellow".value;
    var result = document.getElementById("result");
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
            
    if(principal<=0){
          alert("Enter a positive number")
          return;
    }
    else {      
        document.getElementById("result").innerHTML="If you deposit " + principal +  ",\<br/>at an interest rate of "+rate+".%\<br\>You will recieve an amount of "+interest+",\<br/>in the year "+year+".\<br/>"}}		
// Updates output values if the rate slider is adjusted
function updateRate()
{
    var rateval = document.getElementById("rate").style.backgroundColor="yellow".value;
    document.getElementById("rate_val").innerText=rateval;
}
        
