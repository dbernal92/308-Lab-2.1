const gardenRadius = 5;
const PI = 3.1415;
let plantMinSpace = .8;
let plantStart = 20;
let plantGrowthRate = 2;


// 1. Calculate the total area of the garden.
let gardenArea = PI * gardenRadius * gardenRadius;
console.log(`Garden area: ${gardenArea}`)

// 2. Find the maximum number of plants the garden can hold.
let gardenCapacity = gardenArea / plantMinSpace;
console.log(`Garden max capacity: ${Math.round(gardenCapacity)}`)

// 3. Predict plant growth for 1, 2, and 3 weeks.
let plantsGrown = 0;

console.log(`Week 0: ${plantStart}`)
    plantsGrown = plantStart * plantGrowthRate;
console.log(`Week 1: ${plantsGrown}`)
    plantsGrown = plantsGrown * plantGrowthRate;
console.log(`Week 2: ${plantsGrown}`)
    plantsGrown = plantsGrown * plantGrowthRate;
console.log(`Week 3: ${plantsGrown}`)

// 4. Use conditions to decide whether to prune, monitor, or plant more.
let plantedCap = gardenCapacity * .5;


if (plantStart >= 1 && plantStart <= (gardenCapacity * .50)) {
    console.log(planted);
} else if (plantsGrown => ) {

}