import { Task } from "@/model/Task";
import { bulkAddTasks, getAllTasks, deleteTask } from "../../repository/TaskRepository";
export const toggleAddButtonsVisibility = (isButtonClickable: boolean, setIsButtonClickable: React.Dispatch<React.SetStateAction<boolean>>) => {
    setIsButtonClickable(!isButtonClickable);
};

export const newTask = (setTasks: React.Dispatch<React.SetStateAction<Task[]>>) => {
    // bulkAddTasks();

    console.log("all tasks: " + getAllTasks());
};

export const newCategory = (isButtonClickable: boolean, setIsButtonClickable: React.Dispatch<React.SetStateAction<boolean>>) => {

};

export const completeTask = async (setTasks: React.Dispatch<React.SetStateAction<Task[]>>, taskId?: number) => {
    if (taskId === undefined || taskId == null) {
        console.error('Error: taskId is not provided');
        return;
    }
    
    try {
        await deleteTask(taskId); 
        refreshTaskList(setTasks);
    } catch (error) {
        console.error('Failed to complete the task:', error);
    }
    console.log(`Complete task ${taskId}`);
    
    // TODO Further improvement: state design pattern for TODO, COMPLETED, DELETED status
}

const refreshTaskList = async (setTasks: React.Dispatch<React.SetStateAction<Task[]>>) => {
    try {
        const updatedTasks = await getAllTasks();
        setTasks(updatedTasks); // Update the state with the new list of tasks
    } catch (error) {
        console.error('Failed to refresh tasks:', error);
    }
};

