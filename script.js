// Part 2: Expanding Functionality
// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.
// For example, if the first row of data (the headings) has eight entries, your program should create eight entries per row. You can safely assume that all rows that follow will contain the same number of entries per row.
// let csvString =
//   "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// let numColumns = 0;
// let isFirstRow = true; // processing the first row

// let cell = ""; // store each individual cell value
// let row = []; // store a row of data

// for (let i = 0; i < csvString.length; i++) {
//   let char = csvString[i];

//   if (char === ",") {
//     //count columns
//     if (isFirstRow) {
//       numColumns++;
//     }
//     row.push(cell); // add cell to row
//     cell = ""; // reset cell for the next data piece
//   } else if (char === "\n") {
//     if (isFirstRow) {
//       numColumns++; // count the last cell of the first row
//       isFirstRow = false; //processed the first row
//     }
//     row.push(cell); // add the last cell before newline
//     console.log(...row); // log the entire row of data
//     row = []; // reset row for the next line of data
//     cell = ""; // reset cell for the next row's first data piece
//   } else {
//     cell += char;
//   }
// }

// // After the loop ends, log the last row if it has any data
// if (cell !== "" || row.length > 0) {
//   row.push(cell);
//   console.log(...row);
// }

// After you have implemented the above:
// Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.

let csvString =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// array to store the two-dimensional data
let dataArray = [];

let numColumns = 0;
let isFirstRow = true; // processing the first row

let cell = ""; // store each individual cell value
let row = []; // store a row of data

for (let i = 0; i < csvString.length; i++) {
  let char = csvString[i];

  if (char === ",") {
    //count columns
    if (isFirstRow) {
      numColumns++;
    }
    row.push(cell); // add cell to row
    cell = ""; // reset cell for the next data piece
  } else if (char === "\n") {
    if (isFirstRow) {
      numColumns++; // count the last cell of the first row
      isFirstRow = false; // processed the first row
    }
    row.push(cell); // add the last cell before newline
    dataArray.push(row); // store the row in the data array
    row = []; // reset row for the next line of data
    cell = ""; // reset cell for the next row's first data piece
  } else {
    cell += char;
  }
}

// After the loop ends, store the last row if it has any data
if (cell !== "" || row.length > 0) {
  row.push(cell);
  dataArray.push(row); // store the last row in the data array
}

// Log the entire two-dimensional array
console.log(dataArray);

// Part 3: Transforming Data
// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.

//headers (first row) and convert to lowercase
const headers = dataArray[0].map((header) => header.toLowerCase());

//array of objects from the remaining rows
const resultArray = dataArray.slice(1).map((row) => {
  let obj = {};
  for (let i = 0; i < headers.length; i++) {
    obj[headers[i]] = row[i];
  }
  return obj;
});

// Log the resulting array of objects
console.log(resultArray);
