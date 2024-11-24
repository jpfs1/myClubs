import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pass',
  imports: [
    DatePipe
  ],
  templateUrl: './pass.component.html',
  styleUrl: './pass.component.css'
})
export class PassComponent {

  now: Date = new Date();
  name: string = '';


  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }




}
