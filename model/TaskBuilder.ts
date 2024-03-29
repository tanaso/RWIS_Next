import { TaskPeriod, TaskPeriodStrategy } from "./TaskPeriod";
import { Task } from "../model/Task";

export class TaskBuilder {
    id?: number;
    name: string = '';
    deadline?: Date;
    period?: TaskPeriod;
    categoryName?: string;
    seedReward: boolean = false;
    creationDate?: Date;

    constructor(name: string) {
        this.name = name;
    }

    setId(id: number): TaskBuilder {
        this.id = id;
        return this;
    }

    setName(name: string): TaskBuilder {
        this.name = name;
        return this;
    }

    setDeadline(deadline: Date): TaskBuilder {
        this.deadline = deadline;
        return this;
    }

    setPeriod(period: TaskPeriod): TaskBuilder {
        this.period = period;
        return this;
    }

    setCategoryName(categoryName: string): TaskBuilder {
        this.categoryName = categoryName;
        return this;
    }

    setSeedReward(seedReward: boolean): TaskBuilder {
        this.seedReward = seedReward;
        return this;
    }

    build(): Task {
        this.creationDate = new Date();
        return new Task(this);
    }
}
