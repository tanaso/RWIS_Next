import { db } from "../lib/db";
import { Task } from '../model/Task';
import { TaskPeriod, TaskPeriodStrategy } from "../model/TaskPeriod";

// Function to bulk insert tasks
export function bulkAddTasks() {
    const task1 = {
        name: "Task 1",
        creationDate: new Date(),
        deadline: new Date("2023-12-31"), // Set an appropriate deadline date
        period: new TaskPeriod(1, TaskPeriodStrategy.DAYS),
        categoryName: "Category 1",
        seedReward: true
    };
    const tasks = [task1];
    return db.tasks.bulkPut(tasks)
        .then(() => console.log('Tasks added successfully'))
        .catch(err => {
            console.error('Failed to add tasks:', err);
            throw err; // Rethrow the error for further handling
        });
}

// Function to retrieve all tasks
export function getAllTasks() {
    return db.tasks.toArray()
        .then((tasks) => {
            console.log("Tasks retrieved successfully:", tasks);
            return tasks; // Return the tasks for further processing
        })
        .catch(err => {
            console.error('Failed to retrieve tasks:', err);
            throw err; // Rethrow the error for further handling
        });
}

export function deleteTaskById(taskId: number) {
    return db.tasks.delete(taskId).then(() => {
        console.log(`Task with ID ${taskId} deleted`);
    }).catch((error) => {
        console.error(`There was an error deleting the task: ${error}`);
    });
}

export function addNewTask(newTask: Task) {
    return db.tasks.add(newTask)
        .then(() => {
            console.log('New task added successfully');
        })
        .catch(err => {
            console.error('Failed to add new task:', err);
            throw err; // Rethrow the error for further handling
        });
}

export function getTaskById(taskId: number) {
    return db.tasks.get(taskId)
        .then(task => {
            if (task) {
                console.log(`Task with ID ${taskId} retrieved successfully`, task);
                return task;
            } else {
                console.log(`No task found with ID ${taskId}`);
                throw new Error(`No task found`); 
            }
        })
        .catch(err => {
            console.error(`Failed to retrieve task with ID ${taskId}:`, err);
            throw err; 
        });
}

