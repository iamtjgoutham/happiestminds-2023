const arr = ['A101', 'A102', 'A104', 'A107'];

/* 
* Extract the Number from the string
* Set the 0th index to one pointer
* Loop through the extracted numbers from 1st index
* use Array.from static method to generate the range using the callback
* 
*/ 

function findMissingSeries(series) {
    const numbers = [];
    // Extracting only the numbers from the string array
    for (let i = 0; i < series.length; i++) {
        const number = parseInt(series[i].substring(1));
        numbers.push(number);
    }

    const missingNumbers = [];
    let currentNumber = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        // using Array.from to make use of callback function to generate the missing series
        const missingRange = Array.from(
            { length: numbers[i] - currentNumber },
            (_, index) => "A" + (currentNumber + index)
        );
        missingNumbers.push(...missingRange);
        currentNumber = numbers[i] + 1;
    }
    return missingNumbers;
}

const missingNumbers = findMissingSeries(arr);
console.log("Missing numbers:", missingNumbers);
