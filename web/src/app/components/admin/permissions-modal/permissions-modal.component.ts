import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Role } from 'src/app/_models/Users/role';

@Component({
  selector: 'app-permissions-modal',
  templateUrl: './permissions-modal.component.html',
  styleUrls: ['./permissions-modal.component.css']
})
export class PermissionsModalComponent implements OnInit {
  @Output() updateSelectedRole = new EventEmitter();
  role: Role;
  permissions: any[];
  tempRole = new Role();
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    Object.assign(this.tempRole, this.role);
  }

  toggleGroup(groupName: string) {
    this.permissions.forEach(p => {
      if (p.groupName !== groupName) {
        return;
      }
    });
  }


  selectAll() {
    this.permissions.forEach(p => p.checked = true);
  }


  selectNone() {
    this.permissions.forEach(p => p.checked = false);
  }

  updateTheRole() {
    this.tempRole.permissions = [...this.permissions.filter(el => el.checked === true)];
    this.updateSelectedRole.emit(this.tempRole);
    this.activeModal.dismiss();
  }
}
