import { TaskPeriod, TaskPeriodStrategy } from "./TaskPeriod";
import { TaskBuilder } from "../model/TaskBuilder";

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
    

    static Builder(name: string) {
        return new TaskBuilder(name);
    }
}
