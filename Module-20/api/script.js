
const URL ="https://jsonplaceholder.typicode.com/users";


const factPara = document.querySelector("#fact");

const btn = document.querySelector("#fact_id");

// Sloving Problem With async way 

// /*async function getFacts(){

//     console.log("getData ...................")
//     let promise =   await fetch(URL)

//     console.log("get Data", promise);

//     let data = await promise.json()



    
// factPara.innerText = data[4].email
// }
// */

// Sloving problem with Promise Chin 

function getFacts(){

    fetch(URL)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{

        factPara.innerText = data[2].name; 

    })
}
btn.addEventListener("click" , getFacts)