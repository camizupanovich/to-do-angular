import { Component, OnInit, inject } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { Activity, ToDoService } from 'src/app/services/to-do.service';
@Component({
    selector: 'to-do-component',
    templateUrl: './to-do.component.html',
    styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

    modalWindow: boolean = false;
    form!: FormGroup;
    private fb = inject(FormBuilder);
    private service = inject(ToDoService);
    drafts: Activity[] = [];
    inProgress: Activity[] = [];
    done: Activity[] = [];
    types: String[] = [];
    ngOnInit() {
        this.form = this.fb.group({
            name: ['']
        })
        this.service.getActivities().then((activities) => {
            activities.forEach((e: Activity) => {
                if (e.status === 'DONE') {
                    this.done.push(e);
                } else if (e.status === 'IN_PROGRESS') {
                    this.inProgress.push(e);
                } else {
                    this.drafts.push(e);
                }
            });
        }).catch((error) => {
            console.log(error)
        });
        this.types = this.service.getTypes()

    }
    modal(action: boolean) {
        this.modalWindow = action
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