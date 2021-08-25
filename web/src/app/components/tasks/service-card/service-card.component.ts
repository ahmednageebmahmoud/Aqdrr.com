import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { TaskServiceCard, UserTask } from 'src/app/_models/Users/user-tasks';
import { AuthService } from 'src/app/_services/users/auth.service';
import { UserTasksService } from 'src/app/_services/users/user-tasks.service';
import { OrderTaskerModalComponent } from '../order-tasker-modal/order-tasker-modal.component';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styles: ['']
})
export class ServiceCardComponent implements OnInit {
  @Input() serviceCard: TaskServiceCard;
  @Input('CurrentUserId') currentUserId: number;
  orderModalRef: NgbModalRef | null;

  constructor(private appTranslation: AppTranslationService, private alertify: AlertifyService,
    private modalService: NgbModal, private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }
  
  get isTaskerSameCurrentUser() {

    return this.currentUserId === +(this.serviceCard?.taskerId);
  }

  showUserTaskOrderModal(apiUserTask: TaskServiceCard) {
    const config: NgbModalOptions = {
      backdrop: 'static',
      size: 'lg',
      keyboard: false,
    };
    this.orderModalRef = this.modalService.open(OrderTaskerModalComponent, config);
    this.orderModalRef.componentInstance.userTask = apiUserTask;
    this.orderModalRef.componentInstance.cityName = this.serviceCard?.taskerCard?.cityName;
    this.orderModalRef.componentInstance.orderSuccessfully.subscribe((updatedUserTask: UserTask) => {
      this.router.navigate(['orders']);
      this.orderModalRef.close();
    });
  }
}
