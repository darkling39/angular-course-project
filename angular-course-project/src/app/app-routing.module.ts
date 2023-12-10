import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './components/pipes/pipes.component';
import { HttpComponent } from './components/http/http.component';

const routes: Routes = [
  {path:'pipes', component:PipesComponent},
  {path:'', redirectTo:'pipes', pathMatch:'full'},
  {path:'http', component:HttpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
