/*const path = require('path');

console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

console.log
const base = path.basename(filePath)
console.log(base)
const dir_name = path.dirname(filePath)
console.log(dir_name)*/

const path = require('path');
console.log(path.delimiter)

const flPath = path.join('/content', 'subfolder', 'test.txt')
console.log(flPath)

const base = path.basename(flPath)
console.log(base)

const dir_name = path.dirname(flPath)
console.log(dir_name)

const absolute = path.resolve(__dirname, 'content','subfolder', 'test.txt')
console.log(absolute)

const absolut = path.resolve(__dirname, 'content','subfolder','text.txt')
console.log(absolut)

