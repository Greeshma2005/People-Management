import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService, Person } from '../../services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];

  constructor(private peopleService: PeopleService, public router: Router) {}

  ngOnInit() {
    this.loadPeople();
  }

  loadPeople() {
    this.peopleService.getPeople().subscribe(
      (data: Person[]) => this.people = data,
      (error) => console.error('Error fetching people:', error)
    );
  }

  editPerson(id: string) {
    this.router.navigate(['/edit', id]);
  }

  deletePerson(id: string) {
    if (confirm('Are you sure you want to delete this person?')) {
      this.peopleService.deletePerson(id).subscribe(
        () => {
          alert('Person deleted successfully');
          this.loadPeople(); // refresh list
        },
        (error) => console.error('Error deleting person:', error)
      );
    }
  }

  // Back button method
  goBack() {
    this.router.navigate(['/']); // Redirect to dashboard
  }
}
