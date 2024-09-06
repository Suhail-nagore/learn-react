setTimeout(()=>{
    console.log("this message is displayed after two seconds"); 
}, 2000);

let counter = 0;


let interval = setInterval(()=>{
    counter++;
    console.log("im the interval function output");
    if(counter===5){
        clearInterval(interval);
    }
},5000);


