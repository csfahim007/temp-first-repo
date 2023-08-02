const {readFileSync,writeFileSync} = require('fs')

console.log('start')
const var1 = readFileSync('./content/carColor.txt','utf8')
const var2 = readFileSync('./content/carModel.txt','utf8')

writeFileSync (
    './content/new_create_file.txt',
    `I love it. It's a ${var1} ${var2}.`
    ,{ flag: 'a'}
)
console.log('done with this task')
console.log('starting the next one')