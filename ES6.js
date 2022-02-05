
// ----------------- Object destructuring assignment of function parameters ---------------------
//    ????????????
const profile = {
    name: "John",
    age: 34,
    nationality: "American",
    location: "Europe"
}

// --------- From fCC. Doesn't work as is.... -------------
const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
}
// ------ The same as -----------
// --------- Neither does this... ------------
const profileUpdate = ({ name, age, nationality, location }) => {
}

//  ------- Maybe the same as... ---------
const profileUpdate = ({ name, age, location }) => `My name is ${name}, I'm ${age} years old and I live in ${location}.`;
// ------------ Or ---------------
const profileUpdate = ({ name, age, location }) => [name, age, location];

console.log(profileUpdate(profile));

// ----------- Another -----------------
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// Only change code below this line
// const half = (nums) => (nums.max + nums.min) / 2.0; // Works
// --------- the same as -------------
const half = ({ max, min }) => (max + min) / 2.0; // Also works
// Only change code above this line
console.log(half(stats));


// -------------------------
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
        // the same as this one below which I don't know how .map works...
        // const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
    }
    // Only change code above this line

    return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList)

// ------------------------
const createPerson = (name, age, gender) => {
    return {
        name, age, gender
    };
};
// Or simpler
const createPerson = (name, age, gender) => ({ name, age, gender });

console.log(createPerson("Zodiac Hasbro", 56, "male")); // { name: 'Zodiac Hasbro', age: 56, gender: 'male' }


// -------------------------------
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);


// ================== Class and constructor ===================
// Only change code below this line
class Vegetable {
    constructor(name) {
        this.name = name;
    }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

// ----------------- another --------------
// Only change code below this line
class Thermostat {
    constructor(fahrTemp) {
        this._fahrTemp = fahrTemp;
    }
    // getter
    get temperature() {
        return (this._fahrTemp - 32) * 5 / 9;
    }
    // setter
    set temperature(celTemp) {
        this._fahrTemp = celTemp * 9 / 5 + 32;
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
console.log(thermos);
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);


// ---------------------------------------------
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to represent a response from a server
    let responseFromServer = false;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then(result => {
    console.log(result);
});
makeServerRequest.catch(error => {
    console.log(error);
});