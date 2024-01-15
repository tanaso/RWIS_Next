import { TaskPeriod, TaskPeriodStrategy } from "./TaskPeriod";
import { TaskBuilder } from "@/model/TaskBuilder";

export class Task {
    id?: number;
    name: string;
    deadline?: Date;
    period?: TaskPeriod;
    categoryName?: string;
    seedReward: boolean;
    creationDate?: Date;

    constructor(builder: TaskBuilder) {
        this.id = builder.id;
        this.name = builder.name;
        this.deadline = builder.deadline;
        this.period = builder.period;
        this.categoryName = builder.categoryName;
        this.seedReward = builder.seedReward;
        this.creationDate = builder.creationDate;
    }

    toString() {
        return `Task {
            id: ${this.id},
            name: ${this.name},
            deadline: ${this.deadline ? this.deadline.toISOString() : 'undefined'},
            period: ${this.period ? this.period.toString() : 'undefined'},
            categoryName: ${this.categoryName},
            seedReward: ${this.seedReward},
            creationDate: ${this.creationDate ? this.creationDate.toISOString() : 'undefined'}
        }`;
    }
    

    static Builder(name: string) {
        return new TaskBuilder(name);
    }
}
