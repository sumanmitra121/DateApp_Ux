import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-handlingview',
  templateUrl: './error-handlingview.component.html',
  styleUrls: ['./error-handlingview.component.css']
})
export class ErrorHandlingviewComponent implements OnInit {
  _error:any;
  constructor(private router:Router) {
    const _navigation = this.router.getCurrentNavigation();
     this._error = _navigation?.extras?.state?.error;
  }

  ngOnInit(): void {
  }

}
