import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { EventEmitter } from 'selenium-webdriver';

@Component({
  selector: 'app-concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.css']
})
export class ConceptComponent implements OnInit {

  title='nilesh';
  myid='testid';
  buttonDisabled=false;
  @Input()
  public parentData;
 
  @Output() public childEve=new EventEmitter();

  twobind='';
  color=['red','green','yellow','black'];
  birthday = new Date(1987, 6, 18); 
  constructor() { }

  ngOnInit() {
  }

  updateName(){
    console.log(this.title);
  }

  childParent(){
    this.childEve.emit('hello pune');
  }

}
