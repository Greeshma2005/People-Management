import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  constructor(private router: Router) {}

  goTo(page: string) {
    if (page === 'list') this.router.navigate(['/people']);
    else if (page === 'add') this.router.navigate(['/add']);
    else if (page === 'edit') this.router.navigate(['/edit']); 
    else if (page === 'delete') this.router.navigate(['/delete/1']); 
  }
}
