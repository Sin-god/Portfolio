var el = document.getElementById("btn")
var di = document.getElementById("obg1")
var r = document.getElementById("r")
var plus = document.getElementById("plus")
var right = document.getElementById("right")
var left = document.getElementById("left")


var rot =  parseInt( el.style.transform.match(/\d+/))
var l = 10
var ri = -10
var t =10
var f = -10;
function otb (){
 el.style.visibility = "hidden";   
}
function vid (){
    el.style.visibility = "visible";   
   }
function red (){
    el.style.backgroundColor= "red"
}
function pluse (){

 console.log(el.offsetWidth);
 el.style.width = el.offsetWidth*1.1 + "px"
}
function rightt(){
    l += ri  + t ;
    t+=10
    el.style.transform = "rotate("+l+"deg)"
    console.log(l)
}
function leftt(){
    ri -= l + f ;
    f-=10
    el.style.transform = "rotate("+ri+"deg)"
    console.log(ri)
}


el.addEventListener("click",otb)
di.addEventListener("click",vid)
r.addEventListener("click",red)
plus.addEventListener("click",pluse)
right.addEventListener("click",rightt)
left.addEventListener("click",leftt)

window.addEventListener("scroll",function(e){
  
    alert("Прокрутка неможлива")
    
})
