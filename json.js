//given JSON iterate over  all for loop

// Sample JSON string
const jsonString = '{"name": "John", "age": 25, "city": "New York"}';

// Convert JSON string to JavaScript object
const jsonObject = JSON.parse(jsonString);

// Using a regular for loop
console.log("Using for loop:");
for (let key in jsonObject) {
  console.log(key, jsonObject[key]);
}

// Using for...in loop
console.log("\nUsing for...in loop:");
for (let key in jsonObject) {
  console.log(key, jsonObject[key]);
}

