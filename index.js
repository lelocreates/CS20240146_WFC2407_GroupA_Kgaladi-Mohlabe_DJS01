//Parameters 
const velocity ={
  value:10000,
  unit: 'km/h'
} // velocity (km/h)

const acceleration ={
  value: 38880,
  unit: 'km/h^2'
} // acceleration (m/s^2)

const time ={
  value: 1,
  unit: 'h'
} // seconds (1 hour)

const distance = {
  value: 0,
  unit: 'km'
} // distance (km)]

const fuel ={
  value: 5000,
  unit: 'kg'
}// remaining fuel (kg)

const fuelBurnRate = {
  value: 1800,
  unit: 'kg/h'
}
  // fuel burn rate (kg/s)



const newDistance = calcNewDistance(distance, velocity, time)
const remainingFuel = calcNewRemainingFuel(fuel, fuelBurnRate, time)
const newVelocity = calcNewVel(velocity, acceleration, time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVel(velocity, acceleration, time) { 
  if (time.unit !== 'h' || !time) throw new Error('Note that time as hours is required')
  if (velocity.unit !== 'km/h' || !velocity) throw new Error('Note that velocity as km/h is required')
  if (acceleration.unit !== 'km/h^2' || !acceleration) throw new Error('Note that acceleration in km/h^2 is required')
  return velocity.value + (acceleration.value * time.value)
}

function calcNewDistance(distance, velocity, time) {
  if (time.unit !== 'h' || !time) throw new Error('Note that time as hours is required')
  if (velocity.unit !== 'km/h' || !velocity) throw new Error('Note that velocity as km/h is required')
  if (distance.unit !== 'km' || !distance) throw new Error('Note that distance in km is required')
  return distance.value + (velocity.value * time.value) //calculates new distance
}

function calcNewRemainingFuel(fuel, fuelBurnRate, time) {
  if (time.unit !== 'h' || !time) throw new Error('Note that time as hours is required')
  if (fuel.unit !== 'kg' || !fuel) throw new Error('Note that fuel as kg is required')
  if (fuelBurnRate.unit !== 'kg/h' || !fuelBurnRate) throw new Error('Note that fuel Burn Rate in kg/h is required')
  return fuel.value - (fuelBurnRate.value * time.value) //calculates remaining fuel
}

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);

















/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)


const d2 = d + (vel*time) //calcultes new distance
const rf = fbr*time //calculates remaining fuel
const vel2 = calcNewVel(acc, vel, time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (vel, acc, time) => { 
  return vel + (acc*time)
}

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);

*/