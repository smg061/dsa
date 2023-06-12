const im = ["..########################...........".split(""),
"..#......................#...#####...".split(""),
"..#..........########....#####...#...".split(""),
"..#..........#......#............#...".split(""),
"..#..........########.........####...".split(""),
"..######......................#......".split(""),
".......#..#####.....###########......".split(""),
".......####...#######................".split("")];

const height = im.length;

const width = im[0].length;


function floodFill(image: string[][], x: number, y: number, newChar: string, oldChar: string | undefined, printIterations: boolean = false) {

    if (oldChar === undefined) oldChar = image[y][x];

    if (oldChar === newChar || image[y][x] !== oldChar) return;

    // change the char
    image[y][x] = newChar;

    if (printIterations) printImage(image);

    // change the neighbors
    if ((y + 1 < height) && (image[y + 1][x] === oldChar)) {
        floodFill(image, x, y + 1, newChar, oldChar);
    }

    if ((y - 1 >= 0) && (image[y - 1][x] === oldChar)) {
        floodFill(image, x, y - 1, newChar, oldChar);
    }

    if ((x + 1 < width) && (image[y][x + 1] === oldChar)) {
        floodFill(image, x + 1, y, newChar, oldChar);
    }

    if ((x - 1 >= 0) && (image[y][x - 1] === oldChar)) {
        floodFill(image, x - 1, y, newChar, oldChar);
    }

    return;
}

function printImage(image: string[][]) {
    image.forEach((row) => {
        console.log(row.join(''));
    });
    console.log('\n');
}


function cloneImage(image: string[][]) {
    const newImage: string[][] = [];
    image.forEach((row) => {
        newImage.push(row.slice());
    });
    return newImage;
}
(() => {
    const img = cloneImage(im);
    printImage(img);
    floodFill(img, 3, 3, 'o', undefined, true);
    console.log('---------------------');
    printImage(img);
    console.log('\n\n\n')
    const img2 = cloneImage(im);
    printImage(img2);
    floodFill(img2, 1, 1, '-', undefined);
    console.log('---------------------');
    floodFill(img2, 1, 1, '-', undefined);
    console.log('---------------------');
    printImage(img2);

    const img3 = cloneImage(im);

    console.log('\n\n\n')
    printImage(img3);
    floodFill(img3, img[0].length-1, 0, '@', undefined, true);
    console.log('---------------------');
    printImage(img3);
})();
