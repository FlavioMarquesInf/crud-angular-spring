import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app-material/app-material.module';
import { CommonModule } from '@angular/common';

import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CategoryIconPipe } from './pipes/category-icon.pipe';


@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryIconPipe,
  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  exports: [
    ErrorDialogComponent,
    CategoryIconPipe,
  ]
})
export class SharedModule { }

