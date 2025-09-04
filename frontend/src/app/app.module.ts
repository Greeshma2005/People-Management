// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleEditComponent } from './components/people-edit/people-edit.component';
import { PeopleDeleteComponent } from './components/people-delete/people-delete.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PeopleAddComponent } from './components/people-add/people-add.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PeopleEditComponent,
    PeopleDeleteComponent,
    DashboardComponent,
    PeopleAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
