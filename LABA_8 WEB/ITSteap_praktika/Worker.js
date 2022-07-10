const btn = document.getElementById("GG")

let products = [
    {
        number : 1,
        name : "Проектування та розробка веб-застосунків",
        date :  new Date(),
        persone : "Федусенко О.В.",
       
    },
    {
        number : 2,
        name : "Технології комп'ютерного проектування",
        date :  new Date(),
        persone : "Мінаєва Ю. І.",
    },
    {
        number : 3,
        name : "Високопродуктивні обчислення",
        date :  new Date(),
        persone : "Циганок В.В.",
    },
];

products[0].date.setHours(10,30,0,0)
products[1].date.setHours(12,10,0,0)
products[2].date.setHours(13,40,0,0)



var hours = new Date().getHours()
var minutes = new Date().getMinutes()
var time = hours + minutes/60;

time_1=products[0].date.getHours()+ products[0].date.getMinutes()/60;
time_2=products[1].date.getHours()+ products[1].date.getMinutes()/60;
time_3=products[2].date.getHours()+ products[2].date.getMinutes()/60;




btn.addEventListener("click",function(){
    var newDiv = document.getElementById("ww");
  
    if(time_1<=time && (time_1+1.33)>=time){
        newDiv.innerHTML = products[0].name
       
       }
       
       
       if(time_2<=time && (time_2+1.33)>=time){
        newDiv.innerHTML = products[1].name
           }
       
       
       if(time_3<=time && (time_3+1.33)>=time){
        newDiv.innerHTML =products[2].name
            }
       
       
         if(time_1>time){
            newDiv.innerHTML ='Пари ще не почались'
         }
       
        if(time_3+1.33<time){
            newDiv.innerHTML ='Пари закінчились'
         
             
         }
       
        //  if(time>time_1&&time<time_2){
        //     newDiv.innerHTML ='Перерва після 1 пари'
        //  }
         if(time>time_2&&time<time_3){
            newDiv.innerHTML ='Перерва після 2 пари'
       }
})
