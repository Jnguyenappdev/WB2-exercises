// federal texes are 23%

var monthlyMoney = 1000
var federalTaxes = 23

// formula

var withheldTaxes = 1000 * (federalTaxes/100)

console.log(
     withheldTaxes.toFixed(2) + " is the amount of withheld taxes in Federal taxes for " + monthlyMoney )