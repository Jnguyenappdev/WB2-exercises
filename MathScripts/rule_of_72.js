// saving account worth X to double in value given an interest rate of IR
 var interstRate
 var ruleof = "72"
 var money

 // formula
 var years = ruleof / interstRate
 var moneyYears = interstRate * years + money

 console.log(
    "At a " + interstRate + " interest rate,  your savings account will be worth " 
    + moneyYears.toFixed(2) + " in " + years.toFixed(1) + " years"
 )