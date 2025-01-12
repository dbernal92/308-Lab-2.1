// Growing Plans Exercise

const gardenRadius = 5; // meters
const PI = 3.1415;
let plantMinSpace = .8; // square meters per plant
let plantStart = 20; // plants
let plantGrowthRate = 2; //multiplier


// 1. Calculate the total area of the garden.
let gardenArea = PI * gardenRadius * gardenRadius; // square meters
console.log(`Garden area: ${gardenArea} square meters`) // square meters

// 2. Find the maximum number of plants the garden can hold.
let gardenCapacity = gardenArea / plantMinSpace;  // plants
console.log(`Garden max capacity: ${gardenCapacity} plants`) // plants

// 3. Predict plant growth for 1, 2, and 3 weeks.
let growthFirstWeek = 0; // plants
let growthSecondWeek = 0; // plants
let growthThirdWeek = 0; // plants

console.log(`Week 0: ${plantStart}`)
growthFirstWeek = plantStart * plantGrowthRate;
console.log(`Week 1: ${growthFirstWeek}`)
growthSecondWeek = growthFirstWeek * plantGrowthRate;
console.log(`Week 2: ${growthSecondWeek}`)
growthThirdWeek = growthSecondWeek * plantGrowthRate;
console.log(`Week 3: ${growthThirdWeek}`)

// 4. Use conditions to decide whether to prune, monitor, or plant more.
let plantMoreLimit = gardenCapacity * .5; // plants
let monitorLimit = gardenCapacity * .8; // plants

console.log(`Plant More Limit: ${plantMoreLimit} plants`)
console.log(`Monitor Limit: ${monitorLimit} plants`)

//Week 1
console.log('Week 1:')
if (growthFirstWeek < plantMoreLimit) {
    console.log('Plant more');
} else if (growthFirstWeek >= plantMoreLimit && growthFirstWeek < monitorLimit) {
    console.log('Monitor');
} else {
    console.log('Prune')
}

//Week 2
console.log('Week 2:')
if (growthSecondWeek < plantMoreLimit) {
    console.log('Plant more');
} else if (growthSecondWeek >= plantMoreLimit && growthSecondWeek < monitorLimit) {
    console.log('Monitor');
} else {
    console.log('Prune')
}

//Week 3
console.log('Week 3:')
if (growthThirdWeek < plantMoreLimit) {
    console.log('Plant more');
} else if (growthThirdWeek >= plantMoreLimit && growthThirdWeek < monitorLimit) {
    console.log('Monitor');
} else {
    console.log('Prune')
}

// Thinking Bigger Exercise
let plantNewStart = 100; // plants

// 1. Calculate the number of plants after 10 weeks.
let plantsGrown = new Array(10); // plants

for (let week = 1; week <= plantsGrown.length; week++) {
    plantsGrown[week - 1] = plantNewStart *= plantGrowthRate;
    console.log(`Week ${week}: ${plantNewStart}`)
}

// 2. Calculate total space needed after 10 weeks.
let plantsWeekTen = plantsGrown[9]; // plants
let plantSpaceTen = plantsWeekTen * plantMinSpace; // square meters
console.log(`For ${plantsWeekTen} plants, the total space needed is ${plantSpaceTen} square meters.`)

// 3. Determine additional space required.
let newGardenArea = plantSpaceTen - gardenArea; // square meters
console.log(`The additional space required is ${newGardenArea}.`)

// 4. Calculate the radius of the expanded garden.
let newGardenRadius = Math.sqrt(newGardenArea / PI); // meters
console.log(`The radius of the expanded garden is ${newGardenRadius}.`)

// Errors in Judgement Exercise
// 1. Calculate the total area required for the plants (as before).
let ignoredGardenArea = PI * gardenRadius * gardenRadius // square meters
console.log(`Needed garden area: ${ignoredGardenArea} square meters`)

// 2. Compare the required area to the original garden’s capacity.
let ignoredPlantsGrown = new Array(10);
let spaceNeededWeek = plantNewStart * plantMinSpace;

try {
    for (let week = 1; week <= ignoredPlantsGrown.length; week++) {
        ignoredPlantsGrown[week - 1] = plantNewStart *= plantGrowthRate;
        console.log(`Week ${week}: ${plantNewStart}`);

        //The amount of space needed for this week's plants
        let spaceNeededWeek = plantNewStart * plantMinSpace;

        if (spaceNeededWeek > ignoredGardenArea) {
            throw new Error(`Week ${week}: ${ignoredPlantsGrown[week - 1]} plants (needs ${spaceNeededWeek} square meters of space);
                Current available space: ${ignoredGardenArea} square meters`);
        } 
    }
} catch (error) {
    console.log(`Error: Not enough space!`)
    console.log(`Plants need ${spaceNeededWeek} square meters of space`)
    console.log(`Current available space: ${ignoredGardenArea} square meters`)
}


// 3. If the required area exceeds the garden’s capacity, throw an error.


// 4. Catch the error and log an appropriate message.

