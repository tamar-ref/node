import fs from 'fs/promises';
import colors from 'colors';

const filePath = './ex2.txt';

(async () => {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const products = data.split('\n').map(product => product.trim());
        const colorsList = ['red', 'green', 'yellow', 'blue', 'magenta'];
        products.forEach((product, index) => {
            const color = colorsList[index % colorsList.length];
            console.log(colors[color](product));
        });
    } catch (error) {
        console.error(error);
    }
})();

function setTheme(text, color, underline) {
    if (color) {
        text = colors[color](text);
    }
    if (underline) {
        text = colors.underline(text);
    }
    return text;
}
const themedHello = setTheme('hello!', 'green', true);
console.log(themedHello);