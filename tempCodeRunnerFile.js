const pobj1 = new Promise( (resolve, reject) => {
    setTimeout( () =>{
        let roll_no = [1,3,4,5,24,34]
        reject('Error while communicating')
    },2000)
});

pobj1.