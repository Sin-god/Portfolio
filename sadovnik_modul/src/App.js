import { useState } from "react";



function App() {
const [animals,setAnimals]= useState({
runAnimals:0,
swimAnimals:0,
ekzotAnimals:0,
runSquer:0,
swimSquer:0,
ekzotSquer:0,
ploshcha:0
})

const [bool,setBool]= useState(false)
 
 function handelChanged(event){
 const {name,value} = event.target 
 setAnimals(prevAnimals => ({
   ...prevAnimals , 
   [name]:value
 }))
 }

 function vich(animals){
 
 
  if(animals.runAnimals>0){
    setAnimals(prevAnimals => ({
   ...prevAnimals , 
   runSquer :  15*3 * animals.runAnimals
 }))}

 if(animals.swimAnimals>0){
  setAnimals(prevAnimals => ({
   ...prevAnimals , 
   swimSquer : 6*7 * animals.swimAnimals
 }))}

 if(animals.ekzotAnimals>0){
  setAnimals(prevAnimals => ({
   ...prevAnimals , 
   ekzotSquer :  3*4 * animals.ekzotAnimals
 }))}


 
 setAnimals(prevBird => ({
   ...prevBird , 
   ploshcha : prevBird.ekzotSquer + prevBird.swimSquer + prevBird.runSquer
 }))

  


   setBool(true)
 
  

 }

  return (
    <div className="App ">
    <label htmlFor="">Звірі які бігають <input className="form-control-plaintext"  onChange={handelChanged} type="number" name="runAnimals" value={animals.runAnimals}/></label> <br />
    <label htmlFor="">Звірі які плавають <input className="form-control-plaintext" onChange={handelChanged} type="number" name="swimAnimals" value={animals.swimAnimals} /></label> <br />
    <label htmlFor="">Звірі екзотичні <input className="form-control-plaintext"  onChange={handelChanged} type="number" name="ekzotAnimals" value={animals.ekzotAnimals}/></label> <br />
    <button className="btn btn-primary" onClick={()=>vich(animals)}>Порахувати</button>
    { bool&& <p >Плаща вольєра тварин які бігають : {animals.runSquer } </p>}
    { bool&& <p >Плаща вольєра тварин які плавають : {animals.swimSquer } </p>}
    { bool&& <p >Плаща вольєра екзотичних тварин : {animals.ekzotSquer } </p>}
    { bool&& <p >Сумарна площа вольєрів : {animals.ploshcha } </p>}
    </div>
  );
}

export default App;
