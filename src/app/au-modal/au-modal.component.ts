import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { ModalService } from './modal.service';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'au-modal',
  templateUrl: './au-modal.component.html',
  styleUrls: ['./au-modal.component.scss']
})
export class AuModalComponent implements OnInit {
  @Input() body: TemplateRef<any>;
  @Input() hideOnEsc = true;
  @Input() hideOnClickOutside = true;
  @Input() context: any;

  constructor(
    private modalService: ModalService,
    private eventManager: EventManager
  ) { }

  ngOnInit() {
    this.eventManager.addGlobalEventListener("window", 'keyup.esc', () => {

      if (this.hideOnEsc) {
        this.closeModal();
      }
    })
  }

  onClickOutsideModal() {
    if (this.hideOnClickOutside) {
      this.closeModal();
    }
  }

  closeModal() {
    this.modalService.close();
  }

  cancelClick(e: KeyboardEvent) {
    e.preventDefault();
    e.stopPropagation();
  }

}
