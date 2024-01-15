<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import Page from '@/components/page';
import Section from '@/components/section';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from '../styles/Index.module.css';
import { newTaskLogic } from "../components/newTaskComponent/NewTaskLogic";
import { useRouter } from 'next/router';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { getAllCategoriesNames } from '@/components/categoryComponent/categoryComponent';

=======
import React, { useState } from 'react';
import { formatDate, newTaskLogic } from "../components/newTaskComponent/NewTaskLogic";
import { format } from 'util';
import { AddTasks } from '@/repository/taskRepository';
import { Task } from '../model/Task';
>>>>>>> ac7cbffce2f85085aed9dd72fb63ded263710982

const NewTask = () => {
    const [name, setName] = useState('');
    const [period, setPeriod] = useState('');
<<<<<<< HEAD
    const [deadline, setDeadline] = useState('');
    const [error, setError] = useState('');
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState<string[]>([]);
    const router = useRouter();
=======
    const [deadline, setDeadline] = useState(formatDate(new Date()));
>>>>>>> ac7cbffce2f85085aed9dd72fb63ded263710982

    useEffect(() => {
        // Replace this with actual data fetching logic
        const getCategories = async () => {
            const data = await getAllCategoriesNames();
            setCategories(data);
        };

        getCategories();
    }, []);

<<<<<<< HEAD
    const handleNewTaskSubmit = async (event: any) => {
        event.preventDefault();

        try {
            await newTaskLogic({ name, period, deadline, category});
            setError(''); 
            router.push('/');
        } catch (error: any) {
            setError(error.message);
        }
    };

    return (
        <Page>
            <Section>
                <form onSubmit={handleNewTaskSubmit} className={`${styles.formStyle} ${styles.whiteText}`}>
                    <TextField
                        id="taskName"
                        label="Task Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ className: styles.whiteText }}
                        inputProps={{ className: styles.whiteText }}
                    />
                    <TextField
                        id="deadline"
                        label="Deadline"
                        type="date"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ className: styles.whiteText, shrink: true }}
                        inputProps={{ className: styles.whiteText }}
                    />
                    <TextField
                        id="period"
                        label="Period (in days)"
                        type="number"
                        value={period}
                        onChange={(e) => setPeriod(e.target.value)}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ className: styles.whiteText }}
                        inputProps={{ className: styles.whiteText }}
                    />
                    <Select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        displayEmpty
                        fullWidth
                        variant="outlined"
                        className={styles.whiteText}
                    >
                        <MenuItem value="" disabled>
                            Select a Category
                        </MenuItem>
                        {categories.map((category) => (
                            <MenuItem key={category} value={category}>
                                {category}
                            </MenuItem>
                        ))}
                    </Select>
                    {error && <div className={styles.errorMessage}>{error}</div>}
                    <Button type="submit" variant="contained" color="primary" className={styles.whiteText}>
                        Create Task
                    </Button>
                </form>
            </Section>
        </Page>
=======
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
>>>>>>> ac7cbffce2f85085aed9dd72fb63ded263710982
    );
};

export default NewTask;
