import { Task } from "@/model/Task";
import { getAllTasks, deleteTaskById } from "../../repository/taskRepository";
import { addCuttingPoint, addWaterPoint } from "@/repository/userRepository";
export const toggleAddButtonsVisibility = (isButtonClickable: boolean, setIsButtonClickable: React.Dispatch<React.SetStateAction<boolean>>) => {
    setIsButtonClickable(!isButtonClickable);
};

export const newCategory = (isButtonClickable: boolean, setIsButtonClickable: React.Dispatch<React.SetStateAction<boolean>>) => {

};

export function getTasks(){ // Needed to separate presentation layer and persistency layer
    return getAllTasks();
};

export const completeTask = async (setTasks: React.Dispatch<React.SetStateAction<Task[]>>, taskId?: number) => {
    if (taskId === undefined || taskId == null) {
        console.error('Error: taskId is not provided');
        return;
    }
    
    try {
        await deleteTaskById(taskId);
        addCuttingPoint();
        addWaterPoint();
        refreshTaskList(setTasks);
    } catch (error) {
        console.error('Failed to complete the task:', error);
    }
    console.log(`Complete task ${taskId}`);
    
    // TODO Further improvement: state design pattern for TODO, COMPLETED, DELETED status
}

export const deleteTask = async (setTasks: React.Dispatch<React.SetStateAction<Task[]>>, taskId?: number) => {
    if (taskId === undefined || taskId == null) {
        console.error('Error: taskId is not provided');
        return;
    }
    
    try {
        await deleteTaskById(taskId);
        refreshTaskList(setTasks);
    } catch (error) {
        console.error('Failed to delete the task:', error);
    }
    console.log(`Deleted task ${taskId}`);
}

const refreshTaskList = async (setTasks: React.Dispatch<React.SetStateAction<Task[]>>) => {
    try {
        const updatedTasks = await getAllTasks();
        setTasks(updatedTasks); // Update the state with the new list of tasks
    } catch (error) {
        console.error('Failed to refresh tasks:', error);
    }
};