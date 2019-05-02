import { Directive, TemplateRef, ViewContainerRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from './modal.service';

@Directive({
  selector: '[auModalOpenOnClick]'
})
export class AuModalOpenOnClickDirective implements OnInit, OnDestroy {
  elements: HTMLBaseElement[];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.modalService.close$
      .subscribe(() => this.viewContainer.clear())
  }

  ngOnDestroy() {
    this.elements.forEach(el => el.removeEventListener('click', this.clickHandler));
  }

  @Input() set auModalOpenOnClick(els) {
    this.elements = els.length ? els : [els];

    this.elements.forEach(el => el.addEventListener('click',  this.clickHandler));
  }

  clickHandler = () => {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef);
  }

}
