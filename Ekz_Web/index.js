var pe = document.querySelectorAll('input')
var a = document.getElementById('di')
var b = document.getElementById('btn').addEventListener('click', ()=>{

  pe[1]= Number(pe[1])
 
  const li = new Persone(pe[0].value,pe[1].value,pe[2].value,pe[3])
 


  if(li.adult()){
    a.innerHTML = "Ім'я " + pe[0].value + "<br/>" + "Вік " +  pe[1].value + "<br/>" + "Вага " +  pe[2].value + "<br/>"+ "Паспорт " +  pe[3].value 
   

  }else{
    a.innerHTML = "Ім'я " + pe[0].value + "<br/>" + "Вік " +  pe[1].value + "<br/>" + "Вага " +  pe[2].value + "<br/>"
  }
})


class People {
    constructor(name,age,weight){
        this.name=name
        this.age=age
        this.weight=weight
    }
    adult(){
        if(this.age>=18){
       console.log('Повнолітній')
       return true
      

        }else return false
   }
}

class Persone extends People {
    constructor(name,age,weight,passport){
        super(name,age,weight)
        this.passport = passport
    }
}