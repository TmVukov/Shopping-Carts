const newItems = [

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
    /* {
        img: "images/pear.jpg",
        title: "pear",
        amount: 7,
        price: "$6.00"
    }, */   
    
]

const iconBtn = document.querySelector(".icon__btn")
const cartNewContainer = document.querySelector(".newCart__container")
const newCartItems = document.querySelector(".newCart__items")
const newTotalItems = document.querySelector(".newCart__length")
const newBtnUp = document.querySelector(".newUp")
const newBtnDown = document.querySelector(".newDown")


iconBtn.addEventListener("click", () => cartNewContainer.classList.toggle("open-new"))


let newSelectedItems = newItems.map(newItem=>`
    <div class="newCart__item">
        <img src="${newItem.img}" alt="${newItem.title}">
        <div class="newItem__description">
            <p class="item__title">Item:${newItem.title}</p>
            <p class="item__amount">Amount: ${newItem.amount}</p>
            <p class="item__price">Price:${newItem.price}</p>
        </div>
    </div>
`)


newCartItems.innerHTML = newSelectedItems.join("")
newTotalItems.textContent = `${newItems.length} items`


const allItems = document.querySelectorAll(".newCart__item")
const firstItem = Array.from(allItems)[0]
const margin = Array.from(allItems)[0].offsetHeight
const maxLimit = margin*allItems.length-(margin*3)
let shift = 0



newBtnUp.addEventListener("click", ()=>{    
    shift+=margin
    firstItem.style.marginTop = shift+"px"
    
    if(shift>0) {
        firstItem.style.marginTop = 0
        shift = 0
    }    
})

newBtnDown.addEventListener("click", ()=>{   
   shift-=margin
   firstItem.style.marginTop = shift+"px"

   if(shift <= -maxLimit) {
       firstItem.style.marginTop = -maxLimit+"px"
       shift = -maxLimit
    }    
})




