const form = document.querySelector('.mm');


form.addEventListener('click',function (){
   
  var arr1 =  form.childNodes[1].textContent.split('')
  var arr2 =  form.childNodes[3].textContent.split('')
 

  if(arr2.length>10){
    for(i=0;i<arr2.length;i++){
        if(i>9){
            arr2.splice(i)
        
        }
    }
    document.querySelector('.el2').innerHTML = arr2.join('') + '...'
}


if(arr1.length>10){
    for(i=0;i<arr1.length;i++){
        if(i>9){
            arr1.splice(i)
        
        }
    }
    document.querySelector('.el1').innerHTML = arr1.join('') + '...'
}


})




const table = document.querySelector('table');
var sum = 0 ;




table.addEventListener('click',function(){
for(i=0;i<table.rows.length;i++){
for(j=0;j<table.rows.length-1;j++){
    k=Number(table.rows[j].cells[i].innerHTML)
   
    sum+=k
}

table.rows[table.rows.length-1].cells[i].innerHTML=sum;
sum=0
}
})
