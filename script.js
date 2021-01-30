
const items = [

    {
        img: "images/apple.jpg",
        title: "apple",
        amount: 1,
        price: "$3.00"
    },
    {
        img: "images/apricot.jpg",
        title: "apricot",
        amount: 2,
        price: "$4.00"
    },
    {
        img: "images/banana.jpg",
        title: "banana",
        amount: 3,
        price: "$5.00"
    },
    {
        img: "images/fig.jpg",
        title: "figs",
        amount: 4,
        price: "$8.00"
    },
    {
        img: "images/kiwi.jpg",
        title: "kiwi",
        amount: 5,
        price: "$10.00"
    },
    {
        img: "images/lemon.jpg",
        title: "lemon",
        amount: 6,
        price: "$1.00"
    },
    {
        img: "images/pear.jpg",
        title: "pear",
        amount: 7,
        price: "$6.00"
    }
]

const toggleBtn = document.querySelector(".toggle__btn")
const cartContainer = document.querySelector(".cart__container")
const cartItems = document.querySelector(".cart__items")
const totalItems = document.querySelector(".cart__length")
const btnUp = document.querySelector(".up")
const btnDown = document.querySelector(".down")

let start = 0
let end = 3

//handle toggle
toggleBtn.addEventListener("click", () => cartContainer.classList.toggle("open"))



//inject number of items
totalItems.textContent = `${items.length} items`

//inject single item template 
let selectedItems = items.map(item=>`
    <div class="cart__item">
        <img src="${item.img}" alt="${item.title}">
        <div class="item__description">
            <p class="item__title">Item:${item.title}</p>
            <p class="item__amount">Amount: ${item.amount}</p>
            <p class="item__price">Price:${item.price}</p>
        </div>
    </div>
`)

//set items to initial position of first three items in cart
cartItems.innerHTML = selectedItems.slice(start,end).join("")


//decrement initial position and take care of marginals
btnUp.addEventListener("click", ()=>{
    start--; end--     

    start === - 3 ?

    cartItems.innerHTML = selectedItems.slice(start=items.length-3,end=items.length).join("") :

    start === - 2 ? 
    
    cartItems.innerHTML = selectedItems.slice(items.length-2).join("") + selectedItems.slice(0,1).join("") :

    start === - 1 ? 
    
    cartItems.innerHTML = selectedItems.slice(items.length-1).join("") + selectedItems.slice(0,2).join("") :   

    cartItems.innerHTML = selectedItems.slice(start,end).join("")

})


//increment initial position and take care of marginals 
btnDown.addEventListener("click", ()=>{    
    start++; end++      
    
    end === items.length + 3 ?

    cartItems.innerHTML = selectedItems.slice(start=0,end=3).join("") :

    end === items.length + 2 ?

    cartItems.innerHTML = selectedItems.slice(items.length-1).join("") + selectedItems.slice(0,2).join("") :

    end === items.length + 1 ? 
    
    cartItems.innerHTML = selectedItems.slice(items.length-2).join("") + selectedItems.slice(0,1).join("") :   

    cartItems.innerHTML = selectedItems.slice(start,end).join("")
})

