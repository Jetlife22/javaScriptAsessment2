//ALWAYS EVENT LISTENER AT THE TOP    
var event1 = document.getElementById("button1") 
event1.addEventListener('click', myfirst, false);


function myfirst()
{
    //USERINPUT1 CONVERT IN JS TO A NUMBER VALUE
var userInput1 = parseInt(document.getElementById("salaryInput").value);
var allow11k = 11000;

// created if statements to different wage levels
    
    if (userInput1 > 43000)
    {
        
        // created variables to use inside the if statement
        var incomeAfter11k = userInput1 - 11000;
        //at this wage rate, 32k of the wage will always be taxed at 20
        var inBetweenTaxesRange = 32000;
        var incomeafter32k = incomeAfter11k - 32000;
        var taxAtTwenty= inBetweenTaxesRange *= 0.2;
        //this formula consists of the income after deduction minus the 32k.
        var taxAtForty= incomeafter32k *= 0.4;
        var net = userInput1 - taxAtForty - taxAtTwenty;
        document.getElementById("grossSalary").innerHTML = "Gross Salary is " + "&pound"+ userInput1;
        document.getElementById("allowance").innerHTML = "Allowance is " + "&pound" + "11000";
        document.getElementById("taxAt20").innerHTML = "Tax deducted " + "&pound"+ taxAtTwenty;
        document.getElementById("taxAt40").innerHTML = "Tax deducted "+ "&pound" + taxAtForty;
        document.getElementById("net").innerHTML = "Total Net Income " + "&pound"+ net;
        

        
    }
    
        else if (43000 > userInput1 )
    {
        var incomeAfter11k = userInput1 - 11000;
        var taxAtTwenty= incomeAfter11k *= 0.2;
        var taxAtForty = 0;
        var net = userInput1 - taxAtTwenty;
        document.getElementById("grossSalary").innerHTML = "Gross Salary is " + "&pound"+ userInput1;
        document.getElementById("allowance").innerHTML = "Allowance is 11,000";
        document.getElementById("taxAt20").innerHTML = "Tax deducted on 20%  "+ "&pound" + taxAtTwenty;
        document.getElementById("taxAt40").innerHTML = "Tax deducted on 40%  "+ "&pound" + taxAtForty;
        document.getElementById("net").innerHTML = "Total Net Income " + "&pound"+ net;
        

    }
    



}


  


