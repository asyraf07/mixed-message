// Randomizer -> pick random elemetn inside the array
const randomPick = arr => {
     const rand = Math.floor(Math.random() * arr.length);
     return arr[rand];
};

// Pick random weather
const randomWeather = () => randomPick(["rainy", "cloudy", "sunny", "stormy"]);

// Pick random advice message
const randomAdvice = () => randomPick(["go outside and chillin", "use your best sweater", "take a nap", "sleeping through the day", "choose your best sunglasses to wear"]);

// Pick random partner
const randomPartner = () => randomPick(["your friends", "your family", "yourself", "your girlfriend"]);

// Combine and display the message
const run = () => {
     console.log(`The weather is ${randomWeather()},`);
     console.log(`that means you should ${randomAdvice()}`);
     console.log(`with ${randomPartner()}.`);
}

run();
/*
Output:
The weather is : ["Rainy", "Cloudy", "Sunny", "Stormy"]
It means you should : ["go outside and chillin", "Use your best Sweater", "Take a nap", "Sleeping through the day", "Choose your best sunglasses to wear"]
With: ["Your friends", "your Family", "yourself", "your girlfriend"]
*/
