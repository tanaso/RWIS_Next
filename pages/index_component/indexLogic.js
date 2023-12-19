import { bulkAddTasks, getAllTasks } from "../../repository/TaskRepository";
export const toggleAddButtonsVisibility = (isButtonClickable, setIsButtonClickable) => {
    setIsButtonClickable(!isButtonClickable);
};

export const newTask = (isButtonClickable, setIsButtonClickable) => {
    bulkAddTasks();
    console.log("all tasks: " + getAllTasks());
};

export const newCategory = (isButtonClickable, setIsButtonClickable) => {
    
};

