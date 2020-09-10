import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
// import { PlaygroundComponent } from './playground/playground.component';

const routes: Routes = [
  // { path: "", component: PlaygroundComponent },
  { path: 'employeeList', component: EmployeeListComponent },
  { path: 'employeeDetail', component: EmployeeDetailComponent },
  { path: 'employeeDetail/:id', component: EmployeeDetailComponent },
  { path: "**", redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ EmployeeListComponent,
                                   EmployeeDetailComponent,
                                  //  PlaygroundComponent
                                 ] 
