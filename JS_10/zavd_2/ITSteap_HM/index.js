document.querySelector('#input1').addEventListener('blur',function(){
const text = document.querySelector('#input1').value
const lengthee = 6 ;
text_1 = text.split(" ").join("")

if(text_1.length==lengthee){
 document.querySelector('#input1').style.borderColor = 'green'
}else document.querySelector('#input1').style.borderColor = 'red'
})

document.querySelector('#input2').addEventListener('blur',function(){
    const text = document.querySelector('#input2').value
    const lengthee = 5 ;
    text_1 = text.split(" ").join("")
    
    if(text_1.length==lengthee){
     document.querySelector('#input2').style.borderColor = 'green'
    }else document.querySelector('#input2').style.borderColor = 'red'
    })
