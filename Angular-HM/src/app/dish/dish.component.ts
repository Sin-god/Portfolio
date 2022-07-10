import { Component, OnInit } from '@angular/core';

interface Dish {
  id:number;
  name:string;
  compound:string;
  sequence:string;
}

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})



export class DishComponent  {
  pershe = true;
  second = true;
  trete = true;
  deepObject:any = null;
  
  dishs: Dish[] = [
    {
      id:1,
      name:'Борщ',
      compound:'300 г свежей белокочанной капусты 4 средние картофелины  соль — по вкусу; 1–2 сушёных лавровых листа; зелень — по вкусу 1 зубчик чеснока — опционально; щепотка молотой гвоздики — опционально;щепотка молотого чёрного перца — опционально.',
      sequence:'готовим борщ'
    },
    {
      id:2,
      name:'Макароны по флоцки',
      compound:'Фарш400 г Макароны200 г Репчатый лук1 головка Томатная паста3 столовые ложки Растительное масло2 столовые ложки Сольпо вкусу',
      sequence:'готовим макароны'
    },
    {
      id:3,
      name:'Творог с бананом',
      compound:'творог бнан',
      sequence:'смешукм творог и бнана'
    }
  ];


}
