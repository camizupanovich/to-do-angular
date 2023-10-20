import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SelectComponent } from './select/select.component';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    SelectComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    SelectComponent,
    SpinnerComponent
  ],
})
export class SharedModule { }