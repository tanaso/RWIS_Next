import { TaskPeriod, TaskPeriodStrategy } from "@/model/TaskPeriod";
import { Task } from "@/model/Task";
import { addNewTask } from "@/repository/taskRepository";

export const SEED_RATIO = 0.5;

export const newTaskLogic = async (newTaskDTO: NewTaskDTO) => {
    let period;
    try {
        period = parseInt(newTaskDTO.period);
        if (isNaN(period)) throw new Error("Invalid period. Please enter a number.");
    } catch (error) {
        throw new Error("The inputted period is not a number: " + newTaskDTO.period);
    }

    let taskPeriod = new TaskPeriod(period, TaskPeriodStrategy.DAYS);
    let deadline = new Date(newTaskDTO.deadline);
    if (isDeadlinePast(deadline)) {
        throw new Error("Deadline is in the past. Please choose a future date.");
    }

    const category = newTaskDTO.category;
    if(category === undefined || category.trim() === ''){
        throw new Error("category name not correct");
    }

    let newTask = Task.Builder(newTaskDTO.name)
        .setDeadline(deadline)
        .setPeriod(taskPeriod)
        .setCategoryName(category)
        .setSeedReward(randomBoolean())
        .build();

    try {
        await addNewTask(newTask);
        console.log('Task created');
    } catch (error: any) {
        throw new Error('Error creating task: ' + error.message);
    }
};


function isDeadlinePast(deadline: Date) {
    const currentDate = new Date();

    // Set time to midnight for both dates for an accurate date comparison
    // Otherwise today deadline would be considered past
    const deadlineAtMidnight = new Date(deadline.setHours(0, 0, 0, 0));
    const currentAtMidnight = new Date(currentDate.setHours(0, 0, 0, 0));

    return deadlineAtMidnight < currentAtMidnight;
}

function randomBoolean() {
    return Math.random() >= SEED_RATIO;
}

export const formatDate = (date : Date) => {
    return date.toISOString().split('T')[0]; // Format to YYYY-MM-DD
}