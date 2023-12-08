import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './components/pipes/pipes.component';

const routes: Routes = [
  {path:'pipes', component:PipesComponent},
  {path:'', redirectTo:'pipes', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
