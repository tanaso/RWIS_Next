import { TaskPeriod, TaskPeriodStrategy } from "@/model/TaskPeriod";
import { Task } from "../../model/Task";
import { addNewTask } from "@/repository/taskRepository";



export const newTaskLogic = async (newTaskDTO : NewTaskDTO) => {
    //map and create new task
    let period = 0;
    try {
        period = parseInt(newTaskDTO.period);
    } catch (error) {
        console.log("The inputted period is not a number, period " + newTaskDTO.period);
        //TODO manage exception
        throw error;
    }
    let taskPeriod = new TaskPeriod(period, TaskPeriodStrategy.DAYS); //TODO expand this behavoir
    
    let newTask = Task.Builder(newTaskDTO.name)
        .setDeadline(new Date(newTaskDTO.deadline)) //convert from string to Date
        .setPeriod(taskPeriod)
        .build();

    try {
        await addNewTask(newTask);
        console.log('Task created');
    } catch (error) {
        console.error('Error creating task:', error);
    }
};

export const formatDate = (date : Date) => {
    return date.toISOString().split('T')[0]; // Format to YYYY-MM-DD
}