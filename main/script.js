

function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    function validate()
{
    if(event.key == "-"){
        alert("Enter a positive number")
        return;
    }
    
}
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);    
}
// Updates output values if the rate slider is adjusted
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        