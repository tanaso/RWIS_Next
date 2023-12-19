import { TaskPeriod } from "./TaskPeriod";

export interface Task{
    id?: number;
    name: string;
    creationDate: Date;
    deadline: Date;
    period: TaskPeriod;
    categoryName: string;
    seedReward: boolean;
}