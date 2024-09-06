let myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let success = true;
        
        if (success) {
            resolve("the operations is done");
        }
        else {
            reject("the opr is failed");
        }
    }, 2000)

});

myPromise.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
    
})
