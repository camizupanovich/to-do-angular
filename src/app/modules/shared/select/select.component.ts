import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'select-component',
    templateUrl: './select.component.html',
})
export class SelectComponent {
    /* Form config */
    @Input() label!: string;
    @Input() form!: FormGroup;
    /* Data array options */
    @Input()items:any;
}