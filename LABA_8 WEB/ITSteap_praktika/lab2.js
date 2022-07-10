    document.querySelector('form').addEventListener('submit',function (event){
    event.preventDefault(); 
    const form= document.querySelector('form');
    var arr=[form.elements.input1.value,form.elements.input2.value,form.elements.input3.value]
    var a ;
    var b ;
    var c;
    var z;

    if(arr[0]<=36&&arr[0]>0){
       
        if(arr[1]!=1) b=false
        else b =true;
        
        for(i=arr[2]*4;i>(arr[2]*4)-4;i--){
            if(i==arr[0]){
                a= true
            }
        }
        
        if(a==true&&b==true){
            c=true
        }else c = false
        if(c==true){
          z='Правда'
        }else z='Брехня'
    }


    if(arr[0]<=72&&arr[0]>36){
        if(arr[1]!=2) b=false
        else b =true;
        
        for(i=arr[2]*4+36;i>(arr[2]*4)+32;i--){
            if(i==arr[0]){
                a= true
            }
        }
        
        if(a==true&&b==true){
            c=true
        }else c = false
        if(c==true){
           z='Правда'
        }else z='Брехня'
    }

    if(arr[0]<=108&&arr[0]>72){
        if(arr[1]!=3) b=false
        else b =true;
        
        for(i=arr[2]*4+72;i>(arr[2]*4)+68;i--){
            if(i==arr[0]){
                a= true
            }
        }
        
        if(a==true&&b==true){
            c=true
        }else c = false
        if(c==true){
            z='Правда'
        }else z='Брехня'

    }


document.querySelector('.out-block').innerHTML = z ;
})
 

