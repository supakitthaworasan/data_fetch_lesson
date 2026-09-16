

const rand = Math.random();
const rand_8 = rand * 90000000;
const rand_8_8 = 10000000 + rand_8;
const rand_floor = Math.floor(rand_8_8);

console.log(rand);
console.log(`${rand} * 90000000 = `,rand_8);
console.log(`10000000 + ${rand_8} =` ,rand_8_8);
console.log(rand_floor);
