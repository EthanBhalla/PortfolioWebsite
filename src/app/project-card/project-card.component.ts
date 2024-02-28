import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project = {} as Project;

  bsModalRef?: BsModalRef<any>;

  constructor(private modalService: BsModalService) { 

  }

  OpenProjectModal() {

    const modalOptions: ModalOptions = {
      
      class: "modal-lg",
      initialState: {
        project: this.project
      }

    };

    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions);
  }
}
