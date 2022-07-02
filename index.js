const listOfProducts = [{
    productName: "TV",
    quantity: 20,
    description: "television"
},
{
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
},
{
    productName: "TV",
    quantity: 5,
    description: "television"
},
{
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
},
{
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
}
];



function getUniqueProductCount(data){
    let obj = {}

    for(let i=0;i<data.length;i++){
        if(obj[data[i].productName] == undefined){
    obj[data[i].productName] = 1
    }else{
        obj[data[i].productName] = obj[data[i].productName] + 1
    }
    }
    return obj
}
    
    console.log(getUniqueProductCount(listOfProducts))
    
/*================================================================================================ */

function getUniquePrducts(data) {
    let obj = {}

  data.forEach((d)=>{
    
    if (obj[d.productName] == undefined) {
        obj[d.productName] = d
    } else {
        obj[d.productName].quantity = obj[d.productName].quantity + d.quantity
    }

  });
    let arr = []
    for (let key in obj) {
        arr.push(obj[key])
    }
    return arr
}

console.log(getUniquePrducts(listOfProducts))