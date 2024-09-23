let r = 5 // Radius in meters
const PI = 3.1415
let A = PI * ((r)**2) // Formula of area (in meters squared)
const MinPlantArea = 0.8 // Minimum area required for each individual plant (in meters squared)
let numPlants1 = 20 // Initial Number of plants


//PART I

console.log(A) // Total area is equal to 78.5375 m^2  

// This formula will tell us how much space each plant in meters squared
let A_plant1 = Math.round(A / numPlants1) 
console.log(A_plant1) // each plant individually in the first week has an area of 3.926875 m^2

// Maximum capacity of the garden 
let Max_Cap = Math.round(A / MinPlantArea)
console.log(Max_Cap) // Maximum capacity of the garden is equal to 98.171875 plants

let numPlants2 = numPlants1 * 2 // number of plants after two weeks
let numPlants3 = numPlants2 * 2 // number of plants after three weeks
let plantcount = numPlants3 // use this variable to plug in the values from week 1, week 2, or week 3

let Cap_80 = Max_Cap * 0.8// Garden needs to be pruned if is 80% of max capacity
// Garden needs to be monitored if is 50%-80% of max capacity
let Cap_50 = Max_Cap * 0.5// We can plant some more plants

console.log( 'Cap_50 ---> ', Cap_50 )
console.log( 'plantcount ---> ', plantcount )
console.log( 'Cap_80 ---> ', Cap_80 )

if (plantcount > Cap_80) {
    console.log('The garden needs to be pruned')
}
else if ( Cap_50 < plantcount && plantcount < Cap_80) {
    console.log('The garden is growing at a acceptable rate and needs to be monitored')
}
else if (plantcount < Cap_50) {
    console.log ('There seems to be enough room in the garden, go plant some more plants')
}
else {
    console.log('You need to take better care of your garden')
}


//PART II

// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
// If the space remained circular, what would be the radius of this expanded garden?

