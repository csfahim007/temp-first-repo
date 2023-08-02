
const {readFile,writeFile} = require('fs');
console.log('start')

readFile('./content/carColor.txt','utf-8',(err,result) => {
    if(err){
        console.log(err)
        return
    }
    const n_first = result

    readFile('./content/carModel.txt','utf-8',(err,result) =>{
        if(err){
            console.log(err)
            return
        }
        const n_second = result

        writeFile('./content/11-result-async.txt',`That stylish ${n_first} car is a ${n_second}.`, (err,result)=> {
            if(err){
                console.log(err)
                return
            }
            console.log('done with  this task ')
        })
    })
    })
    console.group("starting  next task")
