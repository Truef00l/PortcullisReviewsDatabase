// Finds current time

const now = new Date();
const date = now.getDate(); // This gives you date, month, year, current time
const month = now.getMonth();
const year = now.getFullYear();
const hours = now.getHours();
const minutes = now.getMinutes();



console.log(`Today is ${date}/${month}/${year} and the time is ${hours}:${minutes}.`);