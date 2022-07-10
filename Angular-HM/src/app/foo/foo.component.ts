import { Component, OnInit } from '@angular/core';
interface User {
  id:number;
  name:string;
  template:string;
}


@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent {
expression = true;
deepObject:any = null;

users: User[] = [
  {
    id:1,
    name:'John Doe',
    template:'bold'
  },
  {
    id:2,
    name:'Boris Britva',
    template:'Italic'
  },
  {
    id:3,
    name:'Spanch Bob',
    template:'unknown'
  }
];

  generateUser(){
    this.deepObject = {
      user:{
        name:'John',
        surname:'Doe'
      }
    };
  }
}
