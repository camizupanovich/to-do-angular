import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
     { path: '', loadChildren: () => import('./modules/to-do/to-do.module').then(m => m.ToDoModule) },
    // { path: '**', component: } 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }