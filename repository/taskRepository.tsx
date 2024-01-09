import { db } from "../lib/db";
import { Task } from '../model/Task';
import { TaskPeriod, TaskPeriodStrategy } from "../model/TaskPeriod";

// Function to bulk insert tasks
export async function AddTasks(_task: Task) {
    const task = {
        name: _task.name,
        creationDate: new Date(),
        deadline: _task.deadline, // Set an appropriate deadline date
        period: _task.period, // Set an appropriate period
        categoryName: "Category 1",
        seedReward: true
    };
    const newTask = task;
    try {
        await db.tasks.put(newTask);
        return console.log('Tasks added successfully');
    } catch (err) {
        console.error('Failed to add tasks:', err);
        throw err; // Rethrow the error for further handling
    }
}

// Function to retrieve all tasks
export async function getAllTasks() {
    try {
        const tasks = await db.tasks.toArray();
        console.log("Tasks retrieved successfully:", tasks);
        return tasks;
    } catch (err) {
        console.error('Failed to retrieve tasks:', err);
        throw err; // Rethrow the error for further handling
    }
}

export async function deleteTask(taskId: number) {
    try {
        await db.tasks.delete(taskId);
        console.log(`Task with ID ${taskId} deleted`);
    } catch (error) {
        console.error(`There was an error deleting the task: ${error}`);
    }
}