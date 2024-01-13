
/*findout largest number from in array */

function maxArray(numbers){

let largest = numbers[0]

    for(let i = 0 ; i<numbers.length ; i++){

         
        const elements = numbers[i];

        if(elements > largest){

           largest = elements
        }
     
    

    }
    return largest

}


const array = [123, 189,22,1111,56498]

const result = maxArray(array)


 console.log(result)
