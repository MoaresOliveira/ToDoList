import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardModule } from './components/board/board.module';
import { FormModule } from './components/form/form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BoardModule,
    FormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
