import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PermissionsService } from 'src/app/_helpers/permissions.service';
import { Task } from 'src/app/_models/settings/task';
import { AuthService } from 'src/app/_services/users/auth.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: []
})
export class TaskDetailsComponent implements OnInit {
  task: Task;

  constructor(public activeModal: NgbActiveModal, public authService: AuthService, public permissions: PermissionsService,) {

  }

  ngOnInit(): void {

  }


}