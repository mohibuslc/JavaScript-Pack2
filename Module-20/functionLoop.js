// Calculate Which number are Odd and Which Number Even from the Array


let evenOdd = [12, 2, 33, 22, 34, 55, 99, 11, 20, 33, 100];


function Calculate() {
  for (let i = 0; i <evenOdd.length; i++) {
    const value = evenOdd[i];

    if (value % 2 === 0) {
      console.log("value id Even : ", value);
    } else {
      console.log("Value is Odd:  ", value);
    }
  }
}

Calculate();
