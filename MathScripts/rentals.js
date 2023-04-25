// x people going on tour
// charter van seats 15 passengers
// how many vans needed
// van $250/day
// how much it will cost to rent vans
// price if split per person

 var people = 38 
 var costVan = 250
 var seats = 15

 var numVans = people / seats
 var totalCost =  Math.ceil(numVans) * costVan
 var splitCost = totalCost / people

 console.log(
    "There are " + people + " people going on a tour a van cost $" + costVan + " and seats " + seats + ". The total amount of vans needed are " + Math.ceil(numVans) +
     " at the total cost of $" + totalCost.toFixed(2) + ". To split cost amoung each person is $" + splitCost.toFixed(2)
 )