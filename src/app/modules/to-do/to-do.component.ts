import { Component, OnInit} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {FormGroup,FormBuilder,FormControl} from '@angular/forms'
@Component({
    selector: 'to-do-component',
    templateUrl: './to-do.component.html',
    styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

    modalWindow:boolean=false;
    form!:FormGroup;
    constructor( private fb : FormBuilder){}
    ngOnInit() {
        this.form = this.fb.group({
            name:['']
        })
    }
    // Transfer Items Between Lists
    drafts = [
        {
            activityId: 3,
            title: "Desayuno",
            type: "FOOD",
            startDate: null,
            endDate: null,
            status: null,
        },
    ]

    inProgress = [
        {
            activityId: 1,
            title: "Subida al cerro catedral",
            type: "ACTIVITY",
            startDate: "2022-01-22 01:30:00",
            endDate: "2022-01-22 23:30:00",
            status: "IN_PROGRESS",
        },
    ];

    done = [
        {
            activityId: 2,
            title: "Fiesta de espuma",
            type: "PARTY",
            startDate: "2022-01-22 01:30:00",
            endDate: "2022-01-22 23:30:00",
            status: "DONE",
        },

    ]
    modal(action:boolean){
        this.modalWindow=action
    }
    onDrop(event: CdkDragDrop<any>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }
}
