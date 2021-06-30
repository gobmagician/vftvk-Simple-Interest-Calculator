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
        document.getElementById("result").innerHTML="If you deposit "
		document.getElementById("result1").innerHTML=principal
		document.getElementById("result2").innerHTML=",\<br/>"
		document.getElementById("result3").innerHTML="at an interest rate of "
		document.getElementById("result4").innerHTML=rate
		document.getElementById("result5").innerHTML="%\<br/>"
		document.getElementById("result6").innerHTML="You will recieve an amount of "
		document.getElementById("result7").innerHTML=interest
		document.getElementById("result8").innerHTML=",\<br/>"
		document.getElementById("result9").innerHTML="in the year "
		document.getElementById("result10").innerHTML=year
		document.getElementById("result11").innerHTML=".\<br/>"
		}
}	
// Updates output values if the rate slider is adjusted
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        