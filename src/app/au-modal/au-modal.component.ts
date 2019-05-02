import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'au-modal',
  templateUrl: './au-modal.component.html',
  styleUrls: ['./au-modal.component.scss']
})
export class AuModalComponent implements OnInit {
  @Input() body: TemplateRef<any>;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalService.close();
  }

  cancelClick(e: KeyboardEvent) {
    e.preventDefault();
    e.stopPropagation();
  }

}
