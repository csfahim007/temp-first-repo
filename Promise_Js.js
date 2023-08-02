const pobj1 = new Promise( (resolve, reject) => {
    setTimeout( () =>{
        let roll_no = [1,3,4,5,24,34]
        reject('Error while communicating')
    },2000)
});

pobj1.catch((error) => {
    console.log(error)
});

//promise.then(): if resolved, promise.catch(): if not resolved!

const new_prm = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Success while communicating")
    },2000)
})

new_prm.then((succ) => {
    console.log(succ)
})