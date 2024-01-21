document.getElementById("btnDeposit").addEventListener("click", function () {
  const depositField = document.getElementById("user-deposit");
  const newFielddeposit = depositField.value;
  // make pareFlot string = number ;

  const amountParsfloat = parseFloat(newFielddeposit);
  

  // Step 2

  // upperLevel value of text
  const elementDeposit = document.getElementById("current-deposit");

  const preivioustotalDeposit = elementDeposit.innerText;
  const preivioustotalDepositvalue = parseFloat(preivioustotalDeposit);

  const total = preivioustotalDepositvalue + amountParsfloat;

  const totalParseFloat = parseFloat(total);

  depositField.value = "";

  if (isNaN(totalParseFloat)) {
    alert("Hallow Did You Work On ");

    return;
  }

  // Balance Working :

  const balance = document.getElementById("balanceUser");

  const newBalance = balance.innerText;

  const previseBalance = parseFloat(newBalance);

  const balanceTotal = previseBalance + amountParsfloat;

  // const balance_total = parseFloat(balanceTotal)

  balance.innerText = balanceTotal;

  // upperLevel option where Desplay the Figure

  elementDeposit.innerText = totalParseFloat;
});
