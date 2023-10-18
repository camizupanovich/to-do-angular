import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToDoRoutingModule } from './to-do.routing.module';
import { ToDoComponent } from './to-do.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedModule } from '../shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [
    ToDoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    ToDoRoutingModule,
    DragDropModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ToDoModule { }