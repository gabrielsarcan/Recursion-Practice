const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]

const tax = 1.20;

function getPrices(taxBool, n = 0) {


    if (n >= dishData.length){
        return
    } 
    let finalPrice

    if(taxBool == true) {
        finalPrice = dishData[n].price * tax

    } else if (taxBool == false) {
        finalPrice = dishData[n].price

    } else {
        console.log('You need to pass a boolean to the getPrices call')
    }

    console.log(`Dish: ${dishData[n].name}, Price: $${finalPrice.toFixed(2)}`);
    getPrices(taxBool, n + 1)
    
}

function getDiscount(taxBool, guests) {
    getPrices(taxBool)

    if (typeof(guests) == 'number' && guests > 0 && guests < 30) {
        let discount = 0

        if (guests < 5) {
            discount = 5

        } else if (guests > 5) {
            discount = 10

        }
        console.log('Discount is: $' + discount)

    } else {
        console.log ('the second argument must be a number between 0 and 30')

    }
}

getDiscount(true, 25)