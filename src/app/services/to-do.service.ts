import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class ToDoService {
    //Nueva injeccion de angular 16
    //private http = inject(HttpClient)

    //actividades en memoria
    public activities = [{
        activityId: 3,
        title: "Desayuno",
        type: "FOOD",
        startDate: null,
        endDate: null,
        status: null,
    },
    {
        activityId: 1,
        title: "Subida al cerro catedral",
        type: "ACTIVITY",
        startDate: "2022-01-22 01:30:00",
        endDate: "2022-01-22 23:30:00",
        status: "IN_PROGRESS",
    },
    {
        activityId: 2,
        title: "Fiesta de espuma",
        type: "PARTY",
        startDate: "2022-01-22 01:30:00",
        endDate: "2022-01-22 23:30:00",
        status: "DONE",
    }];

    //tipos de actividad en memoria
    private types = ['FOOD', 'PARTY', 'ACTIVITY']

    public getActivities(): Promise<Activity[]> {
        return Promise.resolve(this.activities);
    }

    public postActivity(body: any) {
        body['actividyId'] = this.activities.length + 1
        this.activities.push(body);
        return this.activities
    }

    public putActivity(body: any) {
        const index = this.activities.findIndex(a => a.activityId === body.activityId);
        this.activities[index] = body;
        return this.activities
    }
    public getTypes() {
        return this.types;
    }
}
export interface Activity {
    activityId: number;
    title: string;
    type: string;
    startDate?: string | null;
    endDate?: string | null;
    status?: string | null;
}