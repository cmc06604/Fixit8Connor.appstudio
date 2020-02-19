
let myNumbers = [123, 433, 54326, 2234, 1919, 1123, 1928, 3374, 23, 190, 33874]

function ProductCalc(n1,n2){
  return n1*n2
  }


let stoppingPoint = Math.floor(myNumbers.length/2)


let products = []
let j = 0
for ( i = 0; i < stoppingPoint; i+2) {
  products[j] = (ProductCalc(myNumbers[i] + myNumbers[i+1]))
  j = j + 1
}

console.log(products)
  