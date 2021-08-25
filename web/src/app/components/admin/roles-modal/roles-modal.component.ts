import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/_models/Users/User';


@Component({
  selector: 'app-roles-modal',
  templateUrl: './roles-modal.component.html',
  styleUrls: ['./roles-modal.component.css']
})
export class RolesModalComponent implements OnInit {
  @Output() updateSelectedRoles = new EventEmitter();
  user: User;
  roles: any[];
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {

  }

  updateRoles() {
    console.log(this.roles);
    this.updateSelectedRoles.emit(this.roles);
    this.activeModal.close();
  }
}
