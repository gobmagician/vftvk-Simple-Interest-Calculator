

function compute()
{
    var principal = document.getElementById("principal").value;
        function validate()
        {
            if(principal<=0){
                alert("Enter a positive number")
                return;
                }
    
        }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var result = document.getElementById("result");
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);  
    result.innerHTML="If you deposit " + principal + "at an interest rate of " + rate + "." + "You will receive and amount of " + interest + "," + "in the year " + year + "."
}
// Updates output values if the rate slider is adjusted
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        