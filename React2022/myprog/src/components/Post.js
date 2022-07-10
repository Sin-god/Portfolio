import React from "react";


var i = 0
export default function ({ post }) {
  
    
    

  function handleSubmit(e) {
    e.preventDefault();
    
    let a = document.getElementsByClassName('card-body')
   
    
    
     post.completed = true;
     
      if(post.completed==true){
     a[i].className='card-body btn btn-success'
     i++
    }
    else{
        a[i].className='card-body btn btn-danger' 
        i++
    }

    

  
  }
  
    return (
        <div className="card">
            <div className="card-body btn ">
                <h5 className="card-title ">{post.title} </h5>
                <form onSubmit={handleSubmit}>
                <button  type="submit" className="btn btn-primary">Виконати</button>
                </form>
                
               
            </div>
        </div>
       
    );


}