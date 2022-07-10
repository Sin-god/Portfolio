import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExpComponent } from './exp/exp.component';
import { SkillsComponent } from './skills/skills.component';
import { PhotoComponent } from './photo/photo.component';
import { PipesPipe } from './pipes.pipe';
import { FooComponent } from './foo/foo.component';
import { DishComponent } from './dish/dish.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpComponent,
    SkillsComponent,
    PhotoComponent,
    PipesPipe,
    FooComponent,
    DishComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
