import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // <-- import Router
import { PeopleService, Person } from '../../services/people.service';

@Component({
  selector: 'app-people-delete',
  templateUrl: './people-delete.component.html',
})
export class PeopleDeleteComponent implements OnInit {
  people: Person[] = [];
  selectedIds: string[] = [];
  selectAll: boolean = false;

  constructor(
    private peopleService: PeopleService,
    public router: Router // <-- inject Router
  ) {}

  ngOnInit() {
    this.loadPeople();
  }

  loadPeople() {
    this.peopleService.getPeople().subscribe({
      next: (data) => (this.people = data),
      error: (err) => console.error(err),
    });
  }

  toggleSelection(id: string, event: any) {
    if (event.target.checked) {
      this.selectedIds.push(id);
    } else {
      this.selectedIds = this.selectedIds.filter((x) => x !== id);
    }
  }

  toggleSelectAll(event: any) {
    this.selectAll = event.target.checked;
    if (this.selectAll) {
      this.selectedIds = this.people.map((p) => p._id!);
    } else {
      this.selectedIds = [];
    }
  }

  deleteSelected() {
    if (this.selectedIds.length === 0) {
      alert('Select at least one person to delete.');
      return;
    }
    
    if (!confirm('Are you sure you want to delete selected people?')) return;

    this.peopleService.deletePeople(this.selectedIds).subscribe({
      next: (res) => {
        alert(res.message);
        this.loadPeople(); 
        this.selectedIds = [];
        this.selectAll = false;
      },
      error: (err) => console.error(err),
    });
  }

  // <-- Back button function
  goBack() {
    this.router.navigate(['/dashboard']); // replace with your dashboard route
  }
}
