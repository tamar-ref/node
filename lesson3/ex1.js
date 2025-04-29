import leftPad from "left-pad";
import { upperCase } from "text-case";
import fs from "fs";

for (let i = 0; i < 15; i++) {
    if (i % 2 !== 0) {
        console.log(upperCase(leftPad("hello world", 11 + i, ' ')));
    }
    else {
    console.log(leftPad("hello world", 11 + i, ' '));
    }
}

const filePath = "./ex1.txt";
fs.writeFileSync(filePath, '');
for (let i = 0; i < 15; i++) {
    let paddedString = leftPad("hello world", 11 + i, ' ');
    if (i % 2 !== 0) {
        paddedString = upperCase(paddedString);
    }
    fs.appendFileSync(filePath, paddedString + '\n');
}
