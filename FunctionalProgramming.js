// ================== Learn About Functional Programming ===================
/* Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope: INPUT -> PROCESS -> OUTPUT

Functional programming is about:
    1. Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change
    2. Pure functions - the same input always gives the same output
    3. Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled 
    
 Functions are first class objects in JavaScript, which means they can be used like any other object. They can be saved in variables, stored in an object, or passed as function arguments. */

// Function that returns a string representing a cup of green tea
const prepareTea = () => "greenTea";

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

const tea4TeamFCC = getTea(40);
console.log(tea4TeamFCC);

// ================== Understand Functional Programming Terminology ===================
/* 
- 'Callbacks' are the functions that are slipped or passed into another function to decide the invocation of that function. You may have seen them passed to other methods, for example in 'filter', the callback function tells JavaScript the criteria for how to filter an array.

- Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called 'first class functions'. In JavaScript, all functions are first class functions.

- The functions that take a function as an argument, or return a function as a return value are called 'higher order functions'.

- When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a 'lambda'.
*/

const prepareGreenTea = () => "greenTea";
const prepareBlackTea = () => "blackTea";

const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);

// ================== Understand the Hazards of Using Imperative Code ===================
// An imperative style in programming is one that gives the computer a set of statements to perform a task. In contrast, functional programming is a form of declarative programming. You tell the computer what you want done by calling a method or function. JavaScript offers many predefined methods that handle common tasks so you don't need to write out how the computer should perform them. For example, instead of using a 'for loop', you could call the 'map' method which handles the details of iterating over an array. This helps to avoid semantic errors. Like using .slice() below in the tabClose function instead of .splice() because splice alters the original array.

// tabs is an array of titles of each site open within the window
const Window = function (tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
    this.tabs.push("new tab"); // Let's open a new tab for now
    return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {
    // Only change code below this line
    const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
    // const tabsBeforeIndex = this.tabs.splice(0, index); // Using splice
    const tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab
    // const tabsAfterIndex = this.tabs.splice(1); // Using splice

    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

    // Only change code above this line

    return this;
};

// Let's create three browser windows
const workWindow = new Window([
    "GMail",
    "Inbox",
    "Work mail",
    "Docs",
    "freeCodeCamp",
]); // Your mailbox, drive, and other work sites
const socialWindow = new Window([
    "FB",
    "Gitter",
    "Reddit",
    "Twitter",
    "Medium",
]); // Social sites
const videoWindow = new Window(["Netflix", "YouTube", "Vimeo", "Vine"]); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

// ================== Avoid Mutations and Side Effects Using Functional Programming ===================
// One of the core principles of functional programming is to not change things. Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable. In functional programming, changing or altering things is called mutation, and the outcome is called a side effect. A function, ideally, should be a pure function, meaning that it does not cause any side effects.
// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer() {
    return fixedValue + 1;

    // Only change code above this line
}
console.log(incrementer(fixedValue)); // 5

// ================== Pass Arguments to Declare External Dependence in a Function ===================
// Another principle of functional programming is to always declare your dependencies explicitly.
// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer(fixedVal) {
    // Parameter added
    return fixedVal + 1;

    // Only change code above this line
}
console.log(incrementer(fixedValue)); // 5

// ================== Refactor Global Variables Out of Functions ===================
/* Two distinct principles for functional programming:
    1. Don't alter a variable or object - create new variables and objects and return them if need be from a function. Hint: using something like const newArr = arrVar, where arrVar is an array will simply create a reference to the existing variable and not a copy. So changing a value in newArr would change the value in arrVar.
    2. Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable. */
// The global variable
const bookList = [
    "The Hound of the Baskervilles",
    "On The Electrodynamics of Moving Bodies",
    "Philosophiæ Naturalis Principia Mathematica",
    "Disquisitiones Arithmeticae",
];

// Change code below this line
function add(list, bookName) {
    // Mine
    // const addBookList = list.concat(bookName); // Or
    const addBookList = [...list, bookName]; // Or
    // let addBookList = list;
    // addBookList.push(bookName); // Or fCC
    // return [...list, bookName]; // Result not stored in a variable
    return addBookList;

    // Change code above this line
}
// Change code below this line
function remove(list, bookName) {
    const book_index = list.indexOf(bookName);
    if (book_index >= 0) {
        // Mine
        const booksBeforeIndex = list.slice(0, book_index); // Books before index
        const booksAfterIndex = list.slice(book_index + 1); // Books after index
        const remBookList = booksBeforeIndex.concat(booksAfterIndex); // Join the two
        // fCC
        // let newArr = [...arr]; // Copy the bookList array to a new array.
        // newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater from the new array. Or...
        // return list.filter(book => book !== bookName);
        return remBookList;

        // Change code above this line
    }
}
console.log(add(bookList, "A Brief History of Time"));
console.log(remove(bookList, "On The Electrodynamics of Moving Bodies"));
console.log(
    remove(
        add(bookList, "A Brief History of Time"),
        "On The Electrodynamics of Moving Bodies"
    )
);

// ================== Use the map Method to Extract Data from an Array ===================
/* The map method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array, as long as its callback function doesn't.

Map takes up to 2 parameters:
    1. The first is a function, which calls a defined callback function on each element of an array, takes up to three arguments and returns an array that contains the results. 
        a. The first argument is the parameter representing the current element being processed.
        b. The second argument (optional) is the index of that element.
        c. The third argument (optional) is the array upon which the map method was called.
    2. The second (optional) is an object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the 'this' value. */

// Syntax
.map(function (element, index, array) {
    /* ... */
}, thisArg);

// Parentheses are needed around curly brackets to return an object. */
const users = [
    { name: "John", age: 34 },
    { name: "Amy", age: 20 },
    { name: "camperCat", age: 10 },
];
const names = users.map((user) => user.name);
console.log(names); // [ 'John', 'Amy', 'camperCat' ]

// The global variable
const watchList = [
    {
        Title: "Inception",
        Year: "2010",
        Rated: "PG-13",
        Released: "16 Jul 2010",
        Runtime: "148 min",
        Genre: "Action, Adventure, Crime",
        Director: "Christopher Nolan",
        Writer: "Christopher Nolan",
        Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        Language: "English, Japanese, French",
        Country: "USA, UK",
        Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
        Poster: "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        Metascore: "74",
        imdbRating: "8.8",
        imdbVotes: "1,446,708",
        imdbID: "tt1375666",
        Type: "movie",
        Response: "True",
    },
    {
        Title: "Interstellar",
        Year: "2014",
        Rated: "PG-13",
        Released: "07 Nov 2014",
        Runtime: "169 min",
        Genre: "Adventure, Drama, Sci-Fi",
        Director: "Christopher Nolan",
        Writer: "Jonathan Nolan, Christopher Nolan",
        Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        Language: "English",
        Country: "USA, UK",
        Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
        Poster: "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        Metascore: "74",
        imdbRating: "8.6",
        imdbVotes: "910,366",
        imdbID: "tt0816692",
        Type: "movie",
        Response: "True",
    },
    {
        Title: "The Dark Knight",
        Year: "2008",
        Rated: "PG-13",
        Released: "18 Jul 2008",
        Runtime: "152 min",
        Genre: "Action, Adventure, Crime",
        Director: "Christopher Nolan",
        Writer: "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        Language: "English, Mandarin",
        Country: "USA, UK",
        Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
        Poster: "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        Metascore: "82",
        imdbRating: "9.0",
        imdbVotes: "1,652,832",
        imdbID: "tt0468569",
        Type: "movie",
        Response: "True",
    },
    {
        Title: "Batman Begins",
        Year: "2005",
        Rated: "PG-13",
        Released: "15 Jun 2005",
        Runtime: "140 min",
        Genre: "Action, Adventure",
        Director: "Christopher Nolan",
        Writer: "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        Language: "English, Urdu, Mandarin",
        Country: "USA, UK",
        Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        Poster: "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        Metascore: "70",
        imdbRating: "8.3",
        imdbVotes: "972,584",
        imdbID: "tt0372784",
        Type: "movie",
        Response: "True",
    },
    {
        Title: "Avatar",
        Year: "2009",
        Rated: "PG-13",
        Released: "18 Dec 2009",
        Runtime: "162 min",
        Genre: "Action, Adventure, Fantasy",
        Director: "James Cameron",
        Writer: "James Cameron",
        Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        Language: "English, Spanish",
        Country: "USA, UK",
        Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
        Poster: "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        Metascore: "83",
        imdbRating: "7.9",
        imdbVotes: "876,575",
        imdbID: "tt0499549",
        Type: "movie",
        Response: "True",
    },
];

// Using .map() instead of the 'for loop' used below
// Parentheses are needed around curly braces to return an object.
const ratings = watchList.map((movie) => ({
    title: movie.Title,
    rating: movie.imdbRating
}));
// Or fCC using parameter destructuring
const ratings = watchList.map(({ Title: title, imdbRating: rating }) => ({title, rating}));

console.log(ratings); /* [
    { title: 'Inception', rating: '8.8' },
    { title: 'Interstellar', rating: '8.6' },
    { title: 'The Dark Knight', rating: '9.0' },
    { title: 'Batman Begins', rating: '8.3' },
    { title: 'Avatar', rating: '7.9' }
  ] */

// const ratings = [];
// for (let i = 0; i < watchList.length; i++) {
//     ratings.push({ title: watchList[i]["Title"], rating: watchList[i]["imdbRating"] });
// }

// console.log(JSON.stringify(ratings));

// ================== Implement map on a Prototype ===================
// Implement your own version of .map() using a 'for' loop or .forEach()
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
    const newArray = [];
    // Only change code below this line
    this.forEach(elem => newArray.push(callback(elem))); // .concat() won't work here
    // Only change code above this line
    return newArray;
};

const new_s = s.myMap(function (item) {
    return item * 2;
});
console.log(new_s);

// ================== Use the .filter Method to Extract Data from an Array ===================
/* .filter() calls a function on each element of an array and returns a new array containing only the elements for which that function returns true.
Filter takes up to 2 parameters:
    1. The first is a function, which calls a defined callback function on each element of an array, takes up to three arguments and returns an array that contains the results. 
        a. The first argument is the parameter representing the current element being processed.
        b. The second argument (optional) is the index of that element.
        c. The third argument (optional) is the array upon which the filter method was called.
    2. The second (optional) is an object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the 'this' value. */


const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30); // [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]

// This uses the movie list from a ways above. Chained. Gives a list array of movies with an 8.0 or higher rating
const filteredList = watchList
    .filter(movie => Number(movie.imdbRating) >= 8.0)
    .map(movie => ({
        title: movie.Title,
        rating: movie.imdbRating
    }));

console.log(filteredList); /* [
    { title: 'Inception', rating: '8.8' },
    { title: 'Interstellar', rating: '8.6' },
    { title: 'The Dark Knight', rating: '9.0' },
    { title: 'Batman Begins', rating: '8.3' }
  ] */

// ================== Implement the filter Method on a Prototype ===================
// Implement your own version of .filter() using a 'for' loop or .forEach()
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
    // Only change code below this line
    const newArray = [];
    this.forEach(function (elem) {
        if (callback(elem) === true) { newArray.push(elem) }; // .concat() won't work here
    });
    // Only change code above this line
    return newArray;
};

const new_s = s.myFilter(function (item) {
    return item % 2 === 1;
});
console.log(new_s); // [ 23, 65, 5 ]

// ================== Return Part of an Array Using the slice Method ===================
/* The slice method returns a copy of certain elements of an array.
It can take two arguments:
    1. The first (optional) gives the index of where to begin the slice
    2. The second (optional) is the index for where to end the slice (and it's non-inclusive).
If the arguments are not provided, the default is to start at the beginning of the array and go through the end, which is an easy way to make a copy of the entire array. The slice method does not mutate the original array, but returns a new one. */

function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
    return anim.slice(beginSlice, endSlice);
    // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3)); // [ 'Dog', 'Tiger' ]

// ================== Remove Elements from an Array Using slice Instead of splice ===================
function nonMutatingSplice(cities) {
    // Only change code below this line
    return cities.slice(0, 3);
    // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities)); // [ 'Chicago', 'Delhi', 'Islamabad' ]

// ================== Combine Two Arrays Using the concat Method ===================
// The array.concat() method is called on the first array, then another array is provided as the argument to concat, which is added to the end of the first array. It returns a new array and does not mutate either of the original arrays. Here's an example:
function nonMutatingConcat(original, attach) {
    return original.concat(attach);
}

const first = [1, 2, 3];
const second = [4, 5];
console.log(nonMutatingConcat(first, second)); // [ 1, 2, 3, 4, 5 ]

// ================== Add Elements to the End of an Array Using concat Instead of push ===================
function nonMutatingPush(original, newItem) {
    // Only change code below this line
    return original.concat(newItem);

    // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
console.log(nonMutatingPush(first, second)); // [ 1, 2, 3, 4, 5 ]

// ================== Use the reduce Method to Analyze Data ===================
/* The reduce method iterates over each item in an array and returns a single value (i.e. string, number, object, array). This is achieved via a callback function that is called on each iteration.
The callback function accepts four arguments:
    1. The first argument is known as the accumulator, which gets assigned the return value of the callback function from the previous iteration
    2. The second is the current element being processed
    3. The third is the index of that element
    4. The fourth is the array upon which reduce is called.
In addition to the callback function, reduce has an additional parameter which takes an initial value for the accumulator. If this second parameter is not used, then the first iteration is skipped and the second iteration gets passed the first element of the array as the accumulator. */

const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges); // 64
// And
const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];

const usersObj = users.reduce((obj, user) => {
    obj[user.name] = user.age;
    return obj;
}, {});
console.log(usersObj); // { John: 34, Amy: 20, camperCat: 10 }

// Uses the movie list from a ways above. Gets the average rating of movies by C. Nolan
function getRating(watchList) {
    // Only change code below this line
    let directedMovie = watchList.filter(movie => movie.Director == "Christopher Nolan");
    let averageRating = directedMovie.reduce((sum, movie) => sum + Number(movie.imdbRating) / directedMovie.length, 0);
    // Only change code above this line
    return averageRating;
}

console.log(getRating(watchList)); // 8.675

// ================== Use Higher-Order Functions to Solve a Complex Problem ===================
// Mine
const squareList = arr => {
    return arr
        .filter(num => num > 0 && Number.isInteger(num))
        .map(num => num * num);
};

// And fCC using .reduce()
const squareList = arr => {
    return arr.reduce((sqrIntegers, num) => {
        return Number.isInteger(num) && num > 0
            ? sqrIntegers.concat(num * num)
            : sqrIntegers;
    }, []);
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers); // [ 25, 9 ]

// ================== Sort an Array Alphabetically using the sort Method ===================
/* The sort method sorts the elements of an array alphanumerically or according to the callback function. 

Note: the sort method changes the order of the elements in the original array. In other words, it mutates the array in place.

JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. Therefore, it is encouraged to provide a callback function to specify how to sort the array items. When such a callback function, normally called compareFunction, is supplied, the array elements are sorted according to the return value of the compareFunction. If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b. If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a. If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged. */
function alphabeticalOrder(arr) {
    // Only change code below this line
    return arr.sort((a, b) => a === b ? 0 : a < b ? -1 : 1); // Or just
    // return arr.sort();
    // Only change code above this line
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"])); // [ 'a', 'a', 'c', 'd', 'g', 'z' ]
// And
function ascendingOrder(arr) {
    return arr.sort(function (a, b) {
        return a - b;
    });
}

console.log(ascendingOrder([1, 5, 2, 3, 4])); // [ 1, 2, 3, 4, 5 ]

// ================== Return a Sorted Array Without Changing the Original Array ===================
// A side effect of the sort method is that it changes the order of the elements in the original array. In other words, it mutates the array in place.
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    // Mine
    // let newArr = [...arr];
    // return newArr.sort((a, b) => a - b); // Or shorter
    return [...arr].sort((a, b) => a - b);
}

console.log(nonMutatingSort(globalArray)); // [ 2, 3, 5, 6, 9 ]
// Simply using .sort() won't work with this one below = [ 1, 100000, 21, 30, 4 ]
console.log(nonMutatingSort([1, 30, 4, 21, 100000])); // [ 1, 4, 21, 30, 100000 ]

// ================== Split a String into an Array Using the split Method ===================
// The split method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.

function splitify(str) {
    return str.split(/\W/);
}

console.log(splitify("Hello World,I-am code")); // [ 'Hello', 'World', 'I', 'am', 'code' ]

// ================== Combine an Array into a String Using the join Method ===================
// The join method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.
function sentensify(str) {
    return str
        .split(/\W/)
        .join(" ");
}

console.log(sentensify("May-the-force-be-with-you")); // May the force be with you

// ================== Apply Functional Programming to Convert Strings to URL Slugs ===================
function urlSlug(title) {
    return title
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .join("-");
}
// Or fCC
function urlSlug(title) {
    return title
        .toLowerCase()
        .split(" ")
        .filter(substr => substr !== "")
        .join("-");
}
console.log(urlSlug(" A Mind Needs Books Like A Sword Needs A Whetstone")); // a-mind-needs-books-like-a-sword-needs-a-whetstone

// ================== Use the every Method to Check that Every Element in an Array Meets a Criteria ===================
// The every method works with arrays to check if every element passes a particular test. It returns a Boolean value: true, if all values meet the criteria, false if not.
function checkPositive(arr) {
    // fCC
    // return arr.every(function(value) {
    //     return value > 0;
    //   }); // Or shorter, mine
    return arr.every(num => num > 0);
}

console.log(checkPositive([1, 2, 3, -4, 5])); // false

// ================== Use the some Method to Check that Any Elements in an Array Meet a Criteria ===================
// The .some() method works with arrays to check if any element passes a particular test. It returns a Boolean value: true if any of the values meet the criteria, false if not.
const numbers = [10, 50, 8, 220, 110, 11];

console.log(numbers.some(function (currentValue) {
    return currentValue < 10;
})); // true

// ================== Introduction to Currying and Partial Application ===================
// The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1. In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.
// Some examples
function unCurried(x, y) {
    return x + y;
}

function curried(x) {
    return function (y) {
        return x + y;
    }
}
// Or
const curried = x => y => x + y

console.log(curried(2)(3)); // 5

// This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. Example:

const varForCurryFunc = curried(1);
console.log(varForCurryFunc(2)); // 3

// Exercise
function various(x) {
    console.log(x); // 10
    return function (y) {
        console.log(y); // 20
        return function (z) {
            console.log(z); // 30
            return x * y / z;
        }
    }
}

console.log(various(10)(20)(30)); // 6.666666666666667
// Or using .bind()
const partialFn = various.bind(this)(10); // Necessary 'this' first .bind() syntax order
console.log(partialFn(20)(30)); // 6.666666666666667
// And
const partialFn = various.bind(this)(10)(20); // Necessary 'this' first .bind() syntax order
console.log(partialFn(30)); // 6.666666666666667

// Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments.
// Partial application using .bind()
function impartial(x, y, z) {
    console.log(x);
    console.log(y);
    console.log(z);
    return x * y / z;
}

const partialFn = impartial.bind(this, 30, 20); // Necessary 'this' first .bind() syntax order
console.log(partialFn(10)); // 60
