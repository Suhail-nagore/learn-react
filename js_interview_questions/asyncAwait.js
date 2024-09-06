function fetchUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({name:"Suhail",age:23});
        }, 2000);
    });
};

async function getData() {
    console.log("fetching data from servers");

    const data = await fetchUser();

    console.log("the data is", data);
}

getData();