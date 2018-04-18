import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainBoardComponent } from './main-board/main-board.component';
import { BookComponent } from './book/book.component';
import { BookService } from './book/book.service';
import { MainBoardService } from './main-board/main-board.service';
import { OrderByNamePipe } from './order-by-name.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MainBoardComponent,
    BookComponent,
    OrderByNamePipe,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BookService, MainBoardService, OrderByNamePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
