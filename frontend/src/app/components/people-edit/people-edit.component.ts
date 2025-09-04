import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person, PeopleService } from '../../services/people.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-people-edit',
  templateUrl: './people-edit.component.html'
})
export class PeopleEditComponent implements OnInit {
  personForm: FormGroup;
  personId?: string; // optional
  people: Person[] = []; // for dashboard edit view
  showDeleteButton: boolean = true;
  fromDashboard: boolean = false; // track navigation source

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private peopleService: PeopleService
  ) {
    this.personForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      mobile: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.personId = this.route.snapshot.params['id'];
    this.fromDashboard = this.route.snapshot.queryParams['fromDashboard'] === 'true';

    if (this.personId) {
      // Edit a specific person
      this.peopleService.getPerson(this.personId).subscribe(
        person => this.personForm.patchValue(person),
        err => {
          console.error(err);
          alert('Failed to load person details.');
          this.router.navigate([this.fromDashboard ? '/edit' : '/people']);
        }
      );
    } else {
      // No ID -> show list of all people with only Edit buttons
      this.peopleService.getPeople().subscribe(
        data => this.people = data,
        err => console.error(err)
      );
      this.showDeleteButton = false; // hide delete buttons
    }
  }

  onSubmit() {
    if (this.personForm.valid && this.personId) {
      this.peopleService.updatePerson(this.personId, this.personForm.value)
        .subscribe({
          next: () => {
            alert('Person updated successfully');
            // Redirect depending on source
            this.router.navigate([this.fromDashboard ? '/edit' : '/people']);
          },
          error: err => {
            console.error(err);
            alert('Failed to update person');
          }
        });
    }
  }

  // For dashboard edit list buttons
  editPerson(id: string) {
    // Navigate with query param to indicate dashboard source
    this.router.navigate(['/edit', id], { queryParams: { fromDashboard: true } });
  }
}
