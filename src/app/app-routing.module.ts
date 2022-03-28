import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';
import { EditEmpleadoComponent } from './components/edit-empleado/edit-empleado.component';
import { HomeComponent } from './components/home/home.component';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'listado', component: ListEmpleadoComponent},
  {path:'edit/:id', component: EditEmpleadoComponent},
  {path:'create', component: CreateEmpleadoComponent},
  {path:'home', component: HomeComponent},
  {path:'**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
