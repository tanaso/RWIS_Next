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


const NewTask = () => {
    const [name, setName] = useState('');
    const [period, setPeriod] = useState('');
    const [deadline, setDeadline] = useState('');
    const [error, setError] = useState('');
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState<string[]>([]);
    const router = useRouter();

    useEffect(() => {
        // Replace this with actual data fetching logic
        const getCategories = async () => {
            const data = await getAllCategoriesNames();
            setCategories(data);
        };

        getCategories();
    }, []);

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
    );
};

export default NewTask;
