function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var result = document.getElementById("result");
    var result1 = document.getElementById("result1");
    var result2 = document.getElementById("result2");
    var result3 = document.getElementById("result3");
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
            
   
    if(principal<=0){
          alert("Enter a positive number")
          return;
    }
    else {
        document.getElementById("result").innerText="If you invested ";
        document.getElementById("result").innerHTML=principal+"\<br/>";
        document.getElementById("result1").innerHTML=rate+"\<br/>";
        document.getElementById("result2").innerHTML=interest+"\<br/>";
        document.getElementById("result3").innerHTML=year+"\<br/>";
    }
}
        //document.getElementById("result").innerHTML="If you deposit " + principal +  ",\<br/>at an interest rate of "+rate+".%\<br\>You will recieve an amount of "+interest+",\<br/>in the year "+year+".\<br/>"}}		
// Updates output values if the rate slider is adjusted
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        
