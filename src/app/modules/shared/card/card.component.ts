import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'card-component',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Input() type?: string;
    @Input() title?: string;
    @Input() start?: string | null;
    @Input() end?: string | null;
    @Output() edit: EventEmitter<any> = new EventEmitter()

    editar(){
        this.edit.emit()
    }
}