const student = {
  name: "kamal",
  course: "javaScripts",
  country: function () {
    console.log(" Portugal Guimaraes Time ");
  },
  friend: [" jamal ", "Tina", "Mokbul", "Jidan"],
  salary: 12000,
  Address: ["Shajalal Uposhohor "],
};

console.log(student);

// const listLi = document.getElementsByTagName("li");
 


// for (let li of listLi) {
//   console.log(li.innerText);
//   //li.style.color='red'
// }

// // for( let i = 0 ; i<=listLi.length ; i++){

// //   const rest = listLi[i]; 

// //   console.log(rest.innerText)


// // }

// const visitTitale = (document.getElementById("visit-place").innerText =
//   "Tourest Place ");

// console.log(visitTitale);

// // visitTitale.style.color = "Green";

// // Class action 
// const ImportentClass = document.getElementsByClassName("importent");

// // for (let li of ImportentClass) {
// //   li.style.color = "red";
// //   console.log(li.innerText)
// // }

// for(let i =0; i<=ImportentClass.length ; i++){

//     const imp = ImportentClass[i];

//     imp.style.color = 'red'
//     console.log(imp.innerText)
// }
// // Querry selector 

const tourists = document.querySelectorAll('.toris-container ul li');

tourists.forEach(tourist => {
  // console.log(tourist.innerText);
});

const imp = document.querySelectorAll('.importent ')

imp.forEach(element=>{

  element.style.color='red'
  element.style.backgroundColor='blue'
});


const elements = document.querySelectorAll('section');

elements.forEach(elemet =>{


  elemet.style.border= '2px solid blue'
  elemet.style.marginBottom= '10px'
   elemet.style.paddingLeft='16px'
   elemet.style.borderRadius = '5px'
  
})

const placeholder = document.getElementById('frutes_style');

// This you can style css class add to element with classList ; 


placeholder.classList.add('yellow')