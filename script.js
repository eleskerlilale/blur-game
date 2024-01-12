const img=document.querySelector("img")
const count=document.querySelector(".count")
let say=0
let blur=100
window.addEventListener("load", () => {
    setInterval(() => {
        img.style.filter=` blur(${blur}px)`
        count.innerText=`${say}%`
        if(say<100){
            time()
        }
    }, 10);
})

function time(){
    say++
    blur--
}