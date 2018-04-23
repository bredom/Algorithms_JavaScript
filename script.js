function reverseString(str) {
    return str.split('').reverse().join('');
}

function reverseInt(n) {
    var reversed = Math.abs(n).toString().split('').reverse().join('');
    
    return reversed * Math.sign(n);
}

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for(let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar + ': ' + max;
}

function fizzBuzz(n) {
    for(let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if(i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

function chunk(array, size) {
    const chunked = [];
    for (let element of array) {
        const last = chunked[chunked.length - 1];
        if (!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }

    return chunked;
}

function chunk2(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;
}

function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);
    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }
    for(let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }
    return true;
}

function buildCharMap(str) {
    const charMap = {};
    for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

function capitalize(str) {
    const words = [];
    for(let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    return words.join(' ');
}

function steps(n) {
    for(let row = 0; row < n; row++) {
        let stair = '';
        for(let column = 0; column < n; column++) {
            if (column <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        console.log(stair);
    }
}

function recursion(n) {
    if (n ===0) {
        return;
    }

    console.log(n);
    recursion(n - 1);
}

function pyramid(n) {
    const midpoint = Math.floor((2 * n - 1)  / 2);
    
    for(let row = 0; row < n; row++) {
        let level = '';

        for(let column = 0; column < 2 * n - 1; column++) {
            if (midpoint - row <= column && midpoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
}

function vowels(str) {
    let counter = 0;
    const checker = ['a', 'e', 'i', 'o', 'u'];

    for(let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            counter++;
        }
    }

    return counter;
}

function fib(n) {
    const result = [0, 1];

    for(let i = 2; i <= n ; i++) {
        const a = result[i - 1];
        const b = result[i - 2];
        result.push(a + b);
    }

    return result;
}

function fib_rec(n) {
    if (n < 2) {
        return n;
    }

    let num = fib_rec(n - 1) + fib_rec(n - 2);

    return num;
}

function memoize(fn) {
    
    const cache = {};
    
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    }
}


const fibb= memoize(fib_rec(5));
console.log(fibb);













