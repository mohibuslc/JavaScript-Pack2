
// Option-2 for click event Declear ; 


const blue = document.getElementById('makeBlue');

blue.onclick = blueColor

function blueColor(){


    document.body.style.backgroundColor='blue'
}

// option number 3 for Click event Declear 


const greenYellow = document.getElementById('yellowGreen'); 


greenYellow.onclick=function(){

    document.body.style.backgroundColor="yellowgreen" ; 



}


// Option -4 ... Best option can be use .. 


const pinkColor = document.getElementById('pink'); 

pinkColor.addEventListener('click' , colorPink)

function colorPink(){

    document.body.style.backgroundColor='pink'
}



// const click_btn = document.getElementById('btn-click'); 

// function massageText(){


//     console.log("Hallow ")
// }
// click_btn.addEventListener('click', massageText)




   





function eventClick(){
    const click_status = document.getElementById('handle-status');

    click_status.innerText = "welcome to javaScript Event handler"
}

// work for btn and input field ; 




const btnUpdate = document.getElementById('update_Btn');

const handleClick = () => {
    const inputField = document.getElementById('inputText');

    const fieldInput = inputField.value ; 
    
    console.log('inputField')
    
    const p = document.getElementById('text-id');
    
    p.innerText = fieldInput;

    inputField.value='' ; 

};

btnUpdate.addEventListener('click', handleClick);

