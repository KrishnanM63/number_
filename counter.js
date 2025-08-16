const display=document.querySelector("#result")
const increse=document.querySelector("#pluse")
const decrise=document.querySelector("#minus")
const resetbtn=document.querySelector("#reset")
let count=0
increse.addEventListener("click",()=>{
    count++
// const number=document.createElement("p")
num=count
display.innerHTML=num

display.style.color="green"
})
decrise.addEventListener("click",()=>{
    count--
    num=count
display.innerHTML=num
display.style.color="red"

})
resetbtn.addEventListener("click",()=>{
    count=0
    num=count
    display.innerHTML=num
    display.style.color="black"
})