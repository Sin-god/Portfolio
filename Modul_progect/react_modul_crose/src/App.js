import { useEffect, useState } from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { render } from "@testing-library/react";


function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const [bird,setBird]= useState({
flyBird:2,
})


const [bool,setBool]= useState(false)
 
 function handelChanged(event){
  if(bird.flyBird>0&&bird.flyBird<=6){
 const {name,value} = event.target 
 setBird(prevBird => ({
   ...prevBird , 
   [name]:value
 }))
}else {
  alert('Введіть коректне значення')
  setBird(prevBird => ({
      ...prevBird , 
       flyBird : 1
      }))
}
 }


 useEffect(() => {
  document.write = `Вы нажали ${bird.flyBird} раз`;
  }, [bird.flyBird]);

 function canc(bird){
 
   setBool(true)

 }

  return (
    <div className="App">
    <label htmlFor="">Розмір матриці <input className="form-control "  onChange={handelChanged} type="number" name="flyBird" value={bird.flyBird}/></label> <br />
    <button className="btn btn-danger" onClick={()=>canc(bird)}>Вивести матрицю</button>
   {bool&& <><><Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(bird.flyBird*bird.flyBird)).map((_, index) => (
          <Grid item xs={4} sm={4} md={6} key={index}>
            <Item><input /></Item>
          </Grid>
        ))}
      </Grid>
        <label htmlFor="">Номер рядка <input className="form-control " /></label>
        <button className="btn btn-danger">Порахувати</button></>
        <p></p></>
      } 
    </div>
  );
}

export default App;
