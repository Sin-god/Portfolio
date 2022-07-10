const a = document.getElementById('inputt')
const b = document.getElementById('sss')

window.onload = showCity;

if (a) {
a.addEventListener('blur', () => {
    document.cookie= "city="+a.value
    
})}


 
function showCity(){
if (b){     
        alert(document.cookie.split('city='))  
}
}


















/*


    <h1>Лабораторна робота №1.JavaScript</h1>
    <h2>Виконав студент Комарніцький І.В.</h2>
    <h3>Варіант 4</h3>
    </header>
   <section class="main">
     <h2>Завдання до лабораторної роботи</h2>
     <p>4. Створити масиви значень:
      − назва предмету;
      − початок пари;
      − прізвище викладача (допускається пусте значення).
      
      18
      Тривалість пари 80 хвилин. Вивести інформацію про те, яка зараз пара,
      опираючись на поточний час. Якщо в даний момент немає жодної пари, вивести
      одне з повідомлень:
      − пари ще не почалися;
      − перерва після номер пари;
      − пари закінчилися.
      Якщо не вказано прізвище викладача, вивести додаткове повідомлення.</p>
   
      <button id="GG">Яка зараз пара</button>
     <div id="ww"></div>
   </section>






*/





/*const btn = document.getElementById("GG")

let les = [
    {
        name : "Проектування та розробка веб-застосунків",
        date :  new Date(),
        persone : "Федусенко О.В.",
       
    },
    {
        name : "Технології комп'ютерного проектування",
        date :  new Date(),
        persone : "Мінаєва Ю. І.",
    },
    {
        name : "Високопродуктивні обчислення",
        date :  new Date(),
        persone : "Циганок В.В.",
    },
];

les[0].date.setHours(10,30,0,0)
les[1].date.setHours(12,10,0,0)
les[2].date.setHours(13,40,0,0)



var hours = new Date().getHours()
var minutes = new Date().getMinutes()
var time = hours + minutes/60;

time_1=les[0].date.getHours()+ les[0].date.getMinutes()/60;
time_2=les[1].date.getHours()+ les[1].date.getMinutes()/60;
time_3=les[2].date.getHours()+ les[2].date.getMinutes()/60;




btn.addEventListener("click",function(){
    var newDiv = document.getElementById("ww");
  
    if(time_1<=time && (time_1+1.33)>=time){
        newDiv.innerHTML = les[0].name 
       
       }
       
       
       if(time_2<=time && (time_2+1.33)>=time){
        newDiv.innerHTML = les[1].name
           }
       
       
       if(time_3<=time && (time_3+1.33)>=time){
        newDiv.innerHTML =les[2].name
            }
       
       
         if(time_1>time && time_1<time_2&&time_1<time_3){
            newDiv.innerHTML ='Пари ще не почались'
         }
       
        if(time_3+1.33<time){
            newDiv.innerHTML ='Пари закінчились'
         
             
         }
       
         if(time>time_1+1.33&&time<time_2){
            newDiv.innerHTML ='Перерва після 1 пари'
         }
         if(time>time_2+1.33&&time<time_3){
            newDiv.innerHTML ='Перерва після 2 пари'
       }
})
*/