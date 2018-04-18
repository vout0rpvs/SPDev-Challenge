import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBoardComponent } from './main-board/main-board.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
    { path: ' ', redirectTo: 'departments', pathMatch: 'full' },
    { path: 'main-board', component: MainBoardComponent },
    { path: 'book', component: BookComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
