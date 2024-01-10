import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormCreationComponent } from './form-creation/form-creation.component';
import UserData from '../assets/data.json';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormCreationComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_test_application';
  data: any = UserData;


  constructor() {}
  ngOnInit() {
    console.log('Data', this.data);
  }


}
