b= document.getElementById('gg')
a = document.getElementById('gg').addEventListener('click',()=>{
 
document.cookie =   b.checked ;
  
})
  


window.addEventListener('load', (event) => {
  b.checked = `${document.cookie}`
 });
 