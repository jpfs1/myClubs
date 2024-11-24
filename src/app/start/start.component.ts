import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
    });
  }

  createPass() {
    this.router.navigate(['/pass'], { queryParams: {name: this.myForm.controls['name'].value} });
  }
}
