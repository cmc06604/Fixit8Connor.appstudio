
let myNumbers = [123, 433, 54326, 2234, 1919, 1123, 1928, 3374, 23, 190, 33874]

function ProductCalc(n1,n2){
  return n1*n2
  }


let stoppingPoint = Math.floor(myNumbers.length/2)


let products = []
let j = 0

//Let user find product of array ONE BY ONE
for (i = 0; i <= stoppingPoint*2-1; i += 2) { 
  products[j] = ProductCalc(myNumbers[i], myNumbers[i+1])
  j = j + 1
}
alert(products)

products.push(33874)

let sum = 0;

for(var i = 0; i < products.length; i++){

  sum += products[i]

}

alert(sum);