import { Component, Input, OnInit } from '@angular/core';
import { member } from 'src/Model/member';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() member:member
  constructor() { }

  ngOnInit(): void {
  }
}
