import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PeopleService, Person } from '../../services/people.service';

@Component({
  selector: 'app-people-add',
  templateUrl: './people-add.component.html'
})
export class PeopleAddComponent implements OnInit {
  personForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private peopleService: PeopleService
  ) {
    this.personForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      gender: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.personForm.valid) {
      const newPerson: Person = this.personForm.value;
      this.peopleService.createPerson(newPerson).subscribe({
        next: () => {
          alert('Person added successfully!');
          this.router.navigate(['/people']);
        },
        error: (err) => {
          console.error('Error adding person:', err);
          alert('Failed to add person. Try again.');
        }
      });
    } else {
      alert('Please fill all fields correctly.');
    }
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
