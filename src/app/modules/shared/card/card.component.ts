import { Component, Input } from '@angular/core';

@Component({
    selector: 'card-component',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Input() type?: string;
    @Input() title?: string;
    @Input() date!: string | null;
}