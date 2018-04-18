import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatTableModule, MatInputModule, MatListModule, MatToolbarModule,
    MatIconModule, MatPaginatorModule, MatGridListModule } from '@angular/material';
@NgModule({
    imports : [
        MatGridListModule,
        MatPaginatorModule,
        MatButtonModule,
        MatTableModule,
        MatInputModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule
    ],
    exports: [
        MatGridListModule,
        MatPaginatorModule,
        MatButtonModule,
        MatTableModule,
        MatInputModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule
    ],
})

export class MaterialModule { }
