// ********************header***********************

let container = document.querySelector('.container');
let header = document.createElement('div')
let man = document.createElement('div')
let woman = document.createElement('div')
let kids = document.createElement('div')
let logoBox = document.createElement('div')
let logo = document.createElement('img')
let liked = document.createElement('div')
let likedImg = document.createElement('p')
likedImg.innerHTML = '<i class="fa-solid fa-heart"></i>'
liked.style.cssText = 'width: 50px; height: 25px; display: flex; justify-content:center; align-items: center; font-family : "Roboto", sans-serif; background-color: white; font-weight: 700; font-size: 19px; transition: 0.1s; cursor: default; position: absolute;right: 80px; top: 13px;'
header.style.cssText = ' height: 50px; width: 100%; display: flex; justify-content: center; background-color: #white; box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'
man.style.cssText = 'width: 150px; height: 100%; display: flex; justify-content:center; align-items: center; font-family : "Roboto", sans-serif; background-color: white; font-weight: 700; font-size: 19px; transition: 0.1s; cursor: default;'
woman.style.cssText = 'width: 150px; height: 100%; display: flex; justify-content:center; align-items: center; font-family : "Roboto", sans-serif;background-color: white; font-weight: 700; font-size: 19px; transition: 0.1s; cursor: default;'
kids.style.cssText = 'width: 150px; height: 100%; display: flex; justify-content:center; align-items: center; font-family : "Roboto", sans-serif;background-color: white; font-weight: 700;font-size: 19px; transition: 0.1s; cursor: default;'
logoBox.style.cssText = 'width: 150px; height: 50px; display: flex; align-items: center; justify-content: center; position: absolute; top: 0; left: 50px;'
logo.setAttribute("src", "img/logoo.png");
logo.style.cssText = 'width: 140px; height: 90px;'
man.innerHTML = 'MAN'
woman.innerHTML = 'WOMAN'
kids.innerHTML = 'KIDS'
container.appendChild(header)
header.appendChild(logoBox)
logoBox.appendChild(logo)
header.appendChild(man)
header.appendChild(woman)
header.appendChild(kids)
header.appendChild(liked)
liked.appendChild(likedImg)
man.addEventListener('mouseover' , (e) => {
    man.style.boxShadow = ' rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'
    man.style.fontSize = '39px'
})
man.addEventListener('mouseout' , (e) => {
    man.style.boxShadow = 'none'
    man.style.fontSize = '19px'
})
woman.addEventListener('mouseover' , (e) => {
    woman.style.boxShadow = 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'
    woman.style.fontSize = '39px'
})
woman.addEventListener('mouseout' , (e) => {
    woman.style.boxShadow = 'none'
    woman.style.fontSize = '19px'
})
kids.addEventListener('mouseover' , (e) => {
    kids.style.boxShadow = ' rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'
    kids.style.fontSize = '39px'
})
kids.addEventListener('mouseout' , (e) => {
    kids.style.boxShadow = 'none'
    kids.style.fontSize = '19px'
})



// **********************section1*****************************

let section1 = document.createElement('div')
let leftCont = document.createElement('div')
let mainCont = document.createElement('div')
let sliderMother = document.createElement('div')
let buyPage = document.createElement('div')
let slider = document.createElement('div')
let leftArrow = document.createElement('p')
let rightArrow = document.createElement('p')
let sliderLine = document.createElement('div')
let imgMother1 = document.createElement('div')
let imgMother2 = document.createElement('div')
let imgMother3 = document.createElement('div')
let imgMother4 = document.createElement('div')
let imgMother5 = document.createElement('div')
let imgMother6 = document.createElement('div')
let imgMother7 = document.createElement('div')
let imgMother8 = document.createElement('div')
let imgMother9 = document.createElement('div')
buyPage.style.cssText = 'width: 100%; height:auto; display: flex; flex-wrap: wrap; overflow: hidden; gap: 0px;'
section1.style.cssText = 'width: 100%; height: auto; display: flex;'
leftCont.style.cssText = 'width: 18%; height: 92vh; box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'
    
mainCont.style.cssText = 'width: 82%; height: 92vh; overflow: auto; '
sliderMother.style.cssText = 'width: 100%; height: 350px; display: flex; justify-content: center; align-items: center;'
slider.style.cssText = 'width: 700px; height: 230px; position: relative; overflow: hidden; box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'
leftArrow.innerHTML = '<i class="fa-solid fa-chevron-left"></i>'
rightArrow.innerHTML = '<i class="fa-solid fa-chevron-right"></i>'
leftArrow.style.cssText = 'font-size: 26px; margin-right: 10px;'
rightArrow.style.cssText = 'font-size: 26px; margin-left: 10px; z-index: 99;'
sliderLine.style.cssText = 'width: 2100px; height: 100%; display: flex; position: absolute; left: 0; transition:all ease 0.5s;'
imgMother1.style.cssText = 'width: 233.3px; height:100%; background-image: url("img/sliderImg1.jpg"); background-size: cover;'
imgMother2.style.cssText = 'width: 233.3px; height:100%; background-image: url("img/sliderImg2.jpg"); background-size: cover;'
imgMother3.style.cssText = 'width: 233.3px; height:100%; background-image: url("img/sliderImg3.jpg"); background-size: cover;'
imgMother4.style.cssText = 'width: 233.3px; height:100%; background-image: url("img/sliderImg4.jpg"); background-size: cover;'
imgMother5.style.cssText = 'width: 233.3px; height:100%; background-image: url("img/sliderImg5.jpg"); background-size: cover;'
imgMother6.style.cssText = 'width: 233.3px; height:100%; background-image: url("img/sliderImg6.jpg"); background-size: cover;'
imgMother7.style.cssText = 'width: 233.3px; height:100%; background-image: url("img/sliderImg7.jpg"); background-size: cover;'
imgMother8.style.cssText = 'width: 233.3px; height:100%; background-image: url("img/sliderImg8.jpg"); background-size: cover;'
imgMother9.style.cssText = 'width: 233.3px; height:100%; background-image: url("img/sliderImg10.jpg"); background-size: cover;'
container.appendChild(section1)
section1.appendChild(leftCont)
section1.appendChild(mainCont)
mainCont.appendChild(sliderMother)
sliderMother.appendChild(leftArrow)
sliderMother.appendChild(slider)
sliderMother.appendChild(rightArrow)
slider.appendChild(sliderLine)
sliderLine.appendChild(imgMother1)
sliderLine.appendChild(imgMother2)
sliderLine.appendChild(imgMother3)
sliderLine.appendChild(imgMother4)
sliderLine.appendChild(imgMother5)
sliderLine.appendChild(imgMother6)
sliderLine.appendChild(imgMother7)
sliderLine.appendChild(imgMother8)
sliderLine.appendChild(imgMother9)
mainCont.appendChild(buyPage)

// **********************slider***********************
let offset = 0; 
rightArrow.addEventListener('click' , (e) =>{
    offset += 700
    if(offset > 1600){
        offset = 0
    }
    sliderLine.style.left = -offset +'px'
})

leftArrow.addEventListener('click' , (e) =>{
    offset -= 700
    if(offset < 0){
        offset = 1400
    }
    sliderLine.style.left = -offset +'px'
})

// *******************main Section / Products*****************************

let product= [
    {
        img: './img/item1.jpg',
        name: 'SHORT SLEEVE METALLICA ...', 
        price: '14,900.00 AMD', 
        id:1
    },
    {
        img: './img/item2.jpg',
        name: 'SHORT SLEEVE METALLICA ...', 
        price: '14,900.00 AMD',
        id:1
    },
    {
        img: './img/item3.jpg',
        name: 'THE OFFSPRING T-SHIRT',
        price: '14,900.00 AMD',
        id:1
    },
    {
        img: './img/item4.jpg',
        name: 'SYSTEM OF A DOWN TOXICITY ...',
        price: '13,900.00 AMD',
        id:1
    },
    {
        img: './img/item5.jpg',
        name: 'THE ROLLING STONES T-SHIRT',
        price: '13,900.00 AMD', 
        id:1
    },
    {
        img: './img/item6.jpg',
        name: 'THE ROLLING STONES 1978 ...',
        price: '13,900.00 AMD',
        id:1
    },
    {
        img: './img/item7.jpg',
        name: 'NIRVANA NEVERMIND T-SHIRT',
        price: '14,900.00 AMD',
        id:1
    },
    {
        img: './img/item8.jpg',
        name: 'BLINK 182 T-SHIRT',
        price: '14,900.00 AMD',
        id:1
    },
    {
        img: './img/item9.jpg',
        name: 'BAD RELIGION T-SHIRT',
        price: '14,900.00 AMD',
        id:1
    },
    {
        img: './img/imgaa9.jpg',
        name: 'Fine knit T-shirt with knot at the back',
        price: '12,900.00 AMD',
        id:2
    },
    {
        img: './img/imga7.jpg',
        name: 'Tie-dye tulle dress',
        price: '24,900.00 AMD',
        id:2
    },
    {
        img: './img/imga8.jpg',
        name: 'Cropped crochet patchwork jacket',
        price: '24,900.00 AMD',
        id:2
    },
    {
        img: './img/imga6.jpg',
        name: 'Printed long dress with slit',
        price: '14,900.00 AMD',
        id:2
    },
    {
        img: './img/imga5.jpg',
        name: 'Denim cargo mini skirt',
        price: '19,900.00 AMD',
        id:2
    },
    {
        img: './img/imga4.jpg',
        name: 'Relaxed cargo trousers',
        price: '29,900.00 AMD',
        id:2
    },
    {
        img: './img/imga1.jpg',
        name: 'Short sleeve T-shirt with print',
        price: '12,900.00 AMD',
        id:2
    },
    {
        img: './img/imga2.jpg',
        name: 'Long loose-fitting jumpsuit', 
        price: '21,900.00 AMD',
        id:2
    },
    {
        img: './img/imga3.jpg',
        name: 'Trousers with mirror embroidery',
        price: '24,900.00 AMD',
        id:2
    },
    {
        img: './img/kidd1.jfif' ,
        name: 'Patterned Cotton Dress' ,
        price: '3,500.00 AMD',
        id:3
    },
    {
        img: './img/kid2.jfif' ,
        name: 'Patterned Cotton Dress' ,
        price: '3,500.00 AMD',
        id:3 
    },
    {
        img: './img/kid3.webp' ,
        name: 'Cotton Jersey Dress' ,
        price: '6,500.00 AMD', 
        id:3
    },
    {
        img: './img/kidd4.jfif' ,
        name: '2-piece Set' ,
        price: '12,900.00 AMD', 
        id:3
    },
    {
        img: './img/kid5.jfif',
        name: 'Tiered Blouse' ,
        price: '6,900.00 AMD',
        id:3
    },
    {
        img: './img/kid6.jfif' ,
        name: 'Patterned Cotton Dress' ,
        price: '6,900.00 AMD',
        id:3
    },
    {
        img: './img/kid7.jfif' ,
        name: 'Tiered Blouse' ,
        price: '6,900.00 AMD',
        id:3
    },
    {
        img: './img/kid8.jfif' ,
        name: 'Patterned Paper-bag ...' ,
        price: '7,900.00 AMD', 
        id: 3
    },
    {
        img: './img/kid9.jfif' ,
        name: 'Butterfly-sleeved Patterned ...' ,
        price: '10,900.00 AMD',
        id: 3
    },
]
let cart = [

]

function allProduct(){
    product.forEach(item => {
        let productBox = document.createElement("div")
        buyPage.appendChild(productBox)
        // buyPage.appendChild(likeBox)
        productBox.innerHTML = `
        <div class='itemBox' style='border: width; 240px;height: 390px; margin-left: 75px; cursor: pointer;'>
            <div class="imgBox" style="width: 240px; height: 350px;">
                <img src="${item.img}" style="height: 350px; width: 240px;">
            </div>
            <div class='infoBox' style='width: 240px; height: 60px; font-family: "Roboto", sans-serif; font-size: 12px; display: flex; align-items: center; justify-content: center; flex-direction: column; text-align: center; line-height: 6px;'>
                <p style='margin-top: 0px;'>${item.name}</p>
                <span style='font-weight: 700; font-size: 14px;margin-bottom: 30px;'>${item.price}</span>
                <div class='likeBox'></div>
            </div>
        </div>
        `
    })
   
}

allProduct()



function ManProduct(){
    man.onclick = () =>{
        buyPage.innerHTML = ''
        let menArr = product.filter(item => item.id == 1)
        buyPage.innerHTML = ''
        menArr.forEach(function(item){
        let productBox = document.createElement("div")
        buyPage.appendChild(productBox)
        productBox.innerHTML = `
        <div class='itemBox' style='border: width; 240px;height: 390px; margin-left: 75px; cursor: pointer;'>
            <div class="imgBox" style="width: 240px; height: 350px;">
                <img src="${item.img}" style="height: 350px; width: 240px;">
            </div>
            <div class='infoBox' style='width: 240px; height: 60px; font-family: "Roboto", sans-serif; font-size: 12px; display: flex; align-items: center; justify-content: center; flex-direction: column; text-align: center; line-height: 6px;'>
                <p style='margin-top: 0px;'>${item.name}</p>
                <span style='font-weight: 700; font-size: 14px;margin-bottom: 20px;'>${item.price}</span>
            </div>
        </div>
        `
    })
    }
}
ManProduct()

function womanProduct(){
        woman.onclick = () =>{
        buyPage.innerHTML = ''
        let womanArr = product.filter(item => item.id == 2)
        buyPage.innerHTML = ''
        womanArr.forEach(function(item){
        let productBox = document.createElement("div")
        buyPage.appendChild(productBox)
        productBox.innerHTML = `
        <div class='itemBox' style='border: width; 240px;height: 390px; margin-left: 75px; cursor: pointer;'>
            <div class="imgBox" style="width: 240px; height: 350px;">
                <img src="${item.img}" style="height: 350px; width: 240px;">
            </div>
            <div class='infoBox' style='width: 240px; height: 60px; font-family: "Roboto", sans-serif; font-size: 12px; display: flex; align-items: center; justify-content: center; flex-direction: column; text-align: center; line-height: 6px;'>
                <p style='margin-top: 0px;'>${item.name}</p>
                <span style='font-weight: 700; font-size: 14px;margin-bottom: 20px;'>${item.price}</span>
            </div>
        </div>
        `
    })
    }
}
womanProduct()

function kidsProduct(){
    kids.onclick = () =>{
    buyPage.innerHTML = ''
    let kidsArr = product.filter(item => item.id == 3)
    buyPage.innerHTML = ''
    kidsArr.forEach(function(item){
    let productBox = document.createElement("div")
    buyPage.appendChild(productBox)
    productBox.innerHTML = `
    <div class='itemBox' style='border: width; 240px;height: 390px; margin-left: 75px; cursor: pointer;'>
        <div class="imgBox" style="width: 240px; height: 350px;">
            <img src="${item.img}" style="height: 350px; width: 240px;">
        </div>
        <div class='infoBox' style='width: 240px; height: 60px; font-family: "Roboto", sans-serif; font-size: 12px; display: flex; align-items: center; justify-content: center; flex-direction: column; text-align: center; line-height: 6px;'>
            <p style='margin-top: 0px;'>${item.name}</p>
            <span style='font-weight: 700; font-size: 14px;margin-bottom: 20px;'>${item.price}</span>
        </div>
    </div>
    `
})
}
}
kidsProduct()