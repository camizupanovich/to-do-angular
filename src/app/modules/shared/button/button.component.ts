import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'button-component',
    templateUrl: './button.component.html',
})
export class ButtonComponent {
    @Input() icon?: string ;
    @Input() label!: string ;
    @Input() filled!: boolean ;
    @Output() emiter :EventEmitter<any> = new EventEmitter(); 
    @Input() disable?:boolean;

    disparaEvento(){
        this.emiter.emit();
    }
}
