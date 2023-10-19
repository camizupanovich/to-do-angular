import { Component, Input } from '@angular/core';

@Component({
    selector: 'button-component',
    templateUrl: './button.component.html',
})
export class ButtonComponent {
    @Input() icon?: string ;
    @Input() label!: string ;
}
