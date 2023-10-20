import { Component, OnInit, inject } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Activity, ToDoService } from 'src/app/services/to-do.service';
@Component({
    selector: 'to-do-component',
    templateUrl: './to-do.component.html',
    styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
    /* Modal nueva actividad */
    modalWindow: boolean = false;
    /* Formulario */
    form!: FormGroup;
    /* Injecciones Angular 16 , sin constructor */
    private fb = inject(FormBuilder);
    private service = inject(ToDoService);
    /* Secciones */
    drafts: Activity[] = [];
    inProgress: Activity[] = [];
    done: Activity[] = [];
    /* Tipos de actividad para el combo */
    types: any = [];
    /* Simula tiempo servicio */
    loading: boolean = false;
    ngOnInit() {
        this.form = this.fb.group({
            title: ['',[Validators.required]],
            endDate: [''],
            startDate: [''],
            type: ['',[Validators.required]]
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
    agrega() {
        if (this.form.valid) {
            this.loading = true;
            let reqBody: Activity = {
                title: this.form.get('title')?.value,
                startDate: this.form.get('startDate')?.value,
                endDate: this.form.get('endDate')?.value,
                status: null,
                type: this.form.get('type')?.value
            }
            return this.service.postActivity(reqBody).then(() => {
                console.log(reqBody)
                this.drafts.push(reqBody)
            }).finally(() =>
                /* Simula servicio */
                setTimeout(() => {
                    this.form.reset();
                    this.loading = false;
                    this.modal(false);
                }, 3000)
            )
        }
        else{
            return this.loading=false;
        }
    }
}