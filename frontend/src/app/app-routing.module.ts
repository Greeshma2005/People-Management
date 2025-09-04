import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleAddComponent } from './components/people-add/people-add.component';
import { PeopleEditComponent } from './components/people-edit/people-edit.component';
import { PeopleDeleteComponent } from './components/people-delete/people-delete.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
  { path: 'dashboard', component: DashboardComponent },
  { path: 'people', component: PeopleListComponent },
  { path: 'add', component: PeopleAddComponent },
  { path: 'edit', component: PeopleEditComponent }, 
  { path: 'edit/:id', component: PeopleEditComponent },
  { path: 'delete/:id', component: PeopleDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
