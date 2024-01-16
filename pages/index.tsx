import React, { useState, useEffect } from 'react';
import Page from '@/components/page';
import Section from '@/components/section';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import styles from '../styles/Index.module.css';
import { toggleAddButtonsVisibility, newCategory, completeTask, deleteTask, getTasks } from '../components/index_component/indexLogic';
import { Task } from "../model/Task";
import { useRouter } from 'next/router';

const Index = () => {
	const [isButtonClickable, setIsButtonClickable] = useState(false);
	const [tasks, setTasks] = useState<Task[]>([]);
	const router = useRouter();


	useEffect(() => {
		const fetchTasks = async () => {
			const fetchedTasks = await getTasks();
			setTasks(fetchedTasks);
		};

		fetchTasks();
	}, []);

	const handleAdd = () => toggleAddButtonsVisibility(isButtonClickable, setIsButtonClickable);

	const handleAddNewTask = () => {
        router.push('/new-task');
    };

	const handleAddNewCategory = () => {
		router.push('/new-category');
	}

	const handleCompleteTask = async (taskId?: number) => completeTask(setTasks, taskId);

	const handleDeleteTask = async (taskId?: number) => deleteTask(setTasks, taskId);

	return (
		<div style={{ backgroundColor: '#D0EFDB', height: '100vh' }}>

		<Page>
			<Section>
			<div style={{ textAlign: 'center' }}>
			<h1 style={{ fontSize: '3em', marginBottom: '50px', color: '#2A6B41', fontWeight: 'bold' }}>Task List</h1>
			</div>
				<div className={styles.taskList}>
					{tasks.map(task => (
						<div key={task.id} className={styles.taskItem}>
							<span>{task.name} - {task.categoryName}</span>
							<Button variant="contained" color="primary" onClick={() => handleCompleteTask(task.id)} className={styles.completeButton}>
								Complete
							</Button>
							<Button variant="contained" color="primary" onClick={() => handleDeleteTask(task.id)} className = {styles.deleteButton} >
								<DeleteIcon />
							</Button>
						</div>
					))}
				</div>
				<Fab aria-label="add" onClick={handleAdd} style={{ position: 'fixed', right: '20px', bottom: '100px', border: '1px solid white', background: '#2A6B41', color: '#D0EFDB' }}
>

					<AddIcon />
				</Fab>
				{isButtonClickable && (
					<>
						<Fab variant="extended" onClick={handleAddNewTask} color="primary" aria-label="add" style={{ position: 'fixed', right: '20px', bottom: '170px', border: '1px solid white', background: '#2A6B41', color: '#D0EFDB' }}>
							<AddIcon />
							<span className='fabText'>New Task</span>
						</Fab>
						<Fab variant="extended" onClick={handleAddNewCategory} color="primary" aria-label="add" style={{ position: 'fixed', right: '20px', bottom: '240px', border: '1px solid white', background: '#2A6B41', color: '#D0EFDB' }}>
							<AddIcon />
							<span className='fabText'>New Category</span>
						</Fab>
					</>
				)}
			</Section>
		</Page>
		</div>
	);
}

export default Index;