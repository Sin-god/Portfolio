var a = document.querySelectorAll('div')

class Play {
    constructor(){
        this.l ='x'
    }


     click(div){
         
       div.innerHTML  = this.l 
       if(this.l == 'x'){
           this.l = 'o'
       }
       else{
           this.l = 'x'
       }
       this.rows()
       this.col()
       
       this.diag_1()
       this.diag_2()
     }

     rows(){
         for(var i=0;i<=6;i+=3){
             let x= 0
             let o = 0
             for(var j=i;j<=i+2;j++){
                if(a[j].innerHTML == 'x')
                x++
                else if(a[j].innerHTML == 'o') o++
             }
             if(x==3){alert('X winner')}
             if(o==3){alert('O winner')}
         }
     }

     col(){
        for(var i=0;i<=2;i++){
            let x= 0
            let o = 0
            for(var j=i;j<=i+6;j+=3){
               if(a[j].innerHTML == 'x')
               x++
               else if(a[j].innerHTML == 'o') o++
            }
            if(x==3){alert('X winner')}
            if(o==3){alert('O winner')}
        }
    }
   
    diag_1(){
        let x= 0
        let o = 0
        for(var j = 0;j<=8;j+=4){
            if(a[j].innerHTML == 'x') x++
           
            else if(a[j].innerHTML == 'o') o++

        }
        if(x==3){alert('X winner')}
        if(o==3){alert('O winner')}
    }
  
    diag_2(){
            let x= 0
            let o = 0
            for(var j = 2;j<=6;j+=2){
                if(a[j].innerHTML == 'x') x++
               
                else if(a[j].innerHTML == 'o') o++

            }
            if(x==3){alert('X winner')}
            if(o==3){alert('O winner')}
    }


} 

let krest = new Play () 


a.forEach(element => {
    element.addEventListener ('click',()=>{
        krest.click(element)
    })
});
