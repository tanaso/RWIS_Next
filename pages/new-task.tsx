import React, { useState } from 'react';
import { formatDate, newTaskLogic } from "../components/newTaskComponent/NewTaskLogic";
import { format } from 'util';
import { AddTasks } from '@/repository/taskRepository';
import { Task } from '../model/Task';

const NewTask = () => {
    const [name, setName] = useState('');
    const [period, setPeriod] = useState('');
    const [deadline, setDeadline] = useState(formatDate(new Date()));

    const handleNewTaskSubmit = (event: any) => {
        event.preventDefault(); // Prevent the default form submission

        // Here you can handle the submission of the form
        console.log("Task Details:", { name, period, deadline });

        // New task object
        const newTask: Task = {
            name: name,
            deadline: deadline,
            period: period,
            seedReward: true
        };

		//call to business logic
		newTaskLogic({name, period, deadline});

        // Bulk add the new tasks to the table
        AddTasks();

        // Reset the form fields after submission
        setName('');
        setDeadline(formatDate(new Date()));
        setPeriod('');
    };

    return (
        <form onSubmit={handleNewTaskSubmit}>
            <div>
                <label htmlFor="taskName">Task Name:</label>
                <input
                    id="taskName"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Task Name"
                />
            </div>
            <div>
                <label htmlFor="deadline">Deadline:</label>
                <input
                    id="deadline" 
					type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(new Date(e.target.value).toISOString().split('T')[0])}
                    placeholder="Deadline"
                />
            </div>
            <div>
                <label htmlFor="period">Period (in days):</label>
                <input
                    id="period"
                    type="number"
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                    placeholder="Period"
                />
            </div>
            <button type="submit">Create Task</button>
        </form>
    );
};

export default NewTask;
