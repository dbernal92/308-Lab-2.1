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
console.log(`Garden max capacity: ${gardenCapacity} (${Math.round(gardenCapacity)})`)

// 3. Predict plant growth for 1, 2, and 3 weeks.
let growthFirstWeek = 0;
let growthSecondWeek = 0;
let growthThirdWeek = 0;

console.log(`Week 0: ${plantStart}`)
    growthFirstWeek = plantStart * plantGrowthRate;
console.log(`Week 1: ${growthFirstWeek}`)
    growthSecondWeek = growthFirstWeek * plantGrowthRate;
console.log(`Week 2: ${growthSecondWeek}`)
    growthThirdWeek = growthSecondWeek * plantGrowthRate;
console.log(`Week 3: ${growthThirdWeek}`)

// 4. Use conditions to decide whether to prune, monitor, or plant more.
let plantMoreLimit = gardenCapacity * .5;
let monitorLimit = gardenCapacity * .8;

console.log(plantMoreLimit)
console.log(monitorLimit)

//Week 1
console.log('Week 1:')
if (growthFirstWeek < plantMoreLimit) {
    console.log('Plant more');
} else if (growthFirstWeek >= plantMoreLimit && growthFirstWeek < monitorLimit){
    console.log('Monitor');
} else {
        console.log('Prune')
}

//Week 2
console.log('Week 2:')
if (growthSecondWeek < plantMoreLimit) {
    console.log('Plant more');
} else if (growthSecondWeek >= plantMoreLimit && growthSecondWeek < monitorLimit){
    console.log('Monitor');
} else {
        console.log('Prune')
}

//Week 3
console.log('Week 3:')
if (growthThirdWeek < plantMoreLimit) {
    console.log('Plant more');
} else if (growthThirdWeek >= plantMoreLimit && growthThirdWeek < monitorLimit){
    console.log('Monitor');
} else {
        console.log('Prune')
}