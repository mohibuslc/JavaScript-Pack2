

document.getElementById('btnAction').addEventListener('click', function(){

const userWithdraw = document.getElementById('userDeposit')

const withdrawValue = userWithdraw.value

const userAmount = parseFloat(withdrawValue)

userWithdraw.value = '';

if(isNaN(userAmount)){

    alert('Please enter Number'); 

    return ; 
    
}

// const valueParse = parseFloat(withdrawValue)

const valueOf = document.getElementById('amountWithdraw')

const textValue = valueOf.innerText ; 
const newWithdraw = parseFloat(textValue)


const total = userAmount + newWithdraw ; 


valueOf.innerText = total ; 

// Balance 

const balance = document.getElementById('balanceUser');

const balaceOf = balance.innerText ; 

const balanceParse = parseFloat(balaceOf)



const totalBalance = balanceParse - newWithdraw



 balance.innerText = totalBalance



    
})