import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Directive({
  selector: '[auModalOpenOnClick]'
})
export class AuModalOpenOnClickDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.modalService.close$
      .subscribe(() => this.viewContainer.clear())
  }

  @Input() set auModalOpenOnClick(els) {
    let elements: HTMLBaseElement[];

    if (els.length) {
      elements = els;
    } else {
      elements = [els];
    }

    elements.forEach(el => {
      el.addEventListener('click', () => {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef);
      });
    });
  }

}
