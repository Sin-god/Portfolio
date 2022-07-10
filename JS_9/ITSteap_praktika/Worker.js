class Worker{
    constructor(name,surname ,rate ,days ){
        this.name = name;
        this.surname = surname;
        this.rate = rate ; 
        this.days = days;
    }
    getSalary(){
        return this.rate * this.days
    }
}

let name = 'illya'
let surname = 'kom'
let rate = 1200
let days = 15

const worker = new Worker(name,surname,rate,days)

console.log(worker)
console.log(worker.getSalary())