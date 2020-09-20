import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';
import { EmployeeService } from './employee.service';
// import { EmployeeListComponent } from './employee-list/employee-list.component';
// import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

import { HttpClientModule } from '@angular/common/http';
import { HooksComponent } from './hooks/hooks.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    // EmployeeListComponent,
    // EmployeeDetailComponent,
    routingComponents,
    HooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
