import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../Book/book';
@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  @Output() close = new EventEmitter();
  @Input() editBook: Book;

  constructor() { }

  closeEdit(){
    this.close.emit();
  }

  ngOnInit() {
  }

}
