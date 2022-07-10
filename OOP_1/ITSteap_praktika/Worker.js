class Vector{
    constructor(x,y ,z  ){
        this.x = x;
        this.y = y;
        this.z = z ;   
    }
  
    plus(vector){
        return new Vector(this.x + vector.x, this.y + vector.y , this.z + vector.z)
    }
    scalar(vector){
        return new Vector(this.x * vector.x + this.y * vector.y + this.z * vector.z)
    }
    lenth(){
      let a = this.x**2 + this.y**2 + this.z*this.z**2 
        return Math.sqrt(a);
    }
   
}

class Prot extends Vector{
    constructor(x,y,z){
        super(x,y,z)
    }
    toString(){
        return console.log('hello')
    }
    valueOf(){
        return console.log('goodbye')
    }
}

let x = 1
let y = 2
let z = 3


const vector_1 = new Vector(x,y,z)
 x = 3
 y = 4
 z = 5

    const vector_2 = new Vector(x,y,z)

    x = 2
    y = 1
    z = 5
    let vector_3= new Prot(x,y,z)
    console.log (vector_3.toString())
    console.log (vector_3.valueOf())

   


  console.log(vector_1.plus(vector_2))
  console.log(vector_1.scalar(vector_2)) 
  console.log(vector_1.lenth())
  