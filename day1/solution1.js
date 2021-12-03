import { readFileSync } from 'fs';

const data = readFileSync('./data.txt', 'utf8', (err, data) => {
    if (err) throw err;
    return data;
});

const array = data.split('\r\n');

function getIncreases(array) {
    let counter = 0;
    for (let i = 1; i < array.length; i++) {
        if (parseInt(array[i]) > parseInt(array[i-1])) {
            counter++;
        }
    };
    return counter;
}

console.log(getIncreases(array));