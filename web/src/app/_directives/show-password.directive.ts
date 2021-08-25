import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ShowPassword]'
})
export class ShowPasswordDirective {

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.setup();
  }

  setup() {
    const parent = this.el.nativeElement.parentNode;
    const passwordInput = this.el.nativeElement
    const invalidFeedbackDiv = this.el.nativeElement.parentNode.getElementsByClassName("invalid-feedback")?.item(0);
    
    const icon = document.createElement('i');
    icon.className = 'fa fa-eye';

    const span = document.createElement('span');
    span.className = 'input-group-text';
    span.style.cursor = 'pointer';
    span.addEventListener('click', (event) => {
      passwordInput.type = passwordInput.type == 'password' ? 'text' : 'password'
      icon.className = passwordInput.type == 'password' ? 'fa fa-eye' : 'fa fa-eye-slash';
    });
    span.appendChild(icon);

    const divPrependGroup = document.createElement('div');
    divPrependGroup.className = 'input-group-prepend';
    divPrependGroup.appendChild(span);

    const divInputGroup = document.createElement('div');
    divInputGroup.className = 'input-group';

    divInputGroup.appendChild(passwordInput);
    divInputGroup.appendChild(divPrependGroup);
    if (invalidFeedbackDiv) { divInputGroup.appendChild(invalidFeedbackDiv) };

    parent.appendChild(divInputGroup);
  }

}
