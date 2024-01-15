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

<<<<<<< HEAD
export function deleteTaskById(taskId: number) {
    return db.tasks.delete(taskId).then(() => {
=======
export async function deleteTask(taskId: number) {
    try {
        await db.tasks.delete(taskId);
>>>>>>> ac7cbffce2f85085aed9dd72fb63ded263710982
        console.log(`Task with ID ${taskId} deleted`);
    } catch (error) {
        console.error(`There was an error deleting the task: ${error}`);
<<<<<<< HEAD
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

=======
    }
}
>>>>>>> ac7cbffce2f85085aed9dd72fb63ded263710982
