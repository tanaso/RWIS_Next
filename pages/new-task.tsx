import React, { useState } from 'react';
import Page from '@/components/page';
import Section from '@/components/section';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from '../styles/Index.module.css';
import { formatDate, newTaskLogic } from "../components/newTaskComponent/NewTaskLogic";
import { useRouter } from 'next/router'; // Import useRouter

const NewTask = () => {
    const [name, setName] = useState('');
    const [period, setPeriod] = useState('');
    const [deadline, setDeadline] = useState('');
    const router = useRouter();

    const handleNewTaskSubmit = (event: any) => {
        event.preventDefault();
        newTaskLogic({ name, period, deadline });
        setName('');
        setDeadline(formatDate(new Date()));
        setPeriod('');
        router.push('/');
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
                    <Button type="submit" variant="contained" color="primary" className={styles.whiteText}>
                        Create Task
                    </Button>
                </form>
            </Section>
        </Page>
    );
};

export default NewTask;
