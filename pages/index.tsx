import React, { useState, useEffect } from 'react';
import Page from '@/components/page';
import Section from '@/components/section';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import styles from '../styles/Index.module.css';
import { toggleAddButtonsVisibility, newTask, newCategory, completeTask } from './index_component/indexLogic';
import { Task } from "../model/Task";

// Assuming getAllTasks is imported from somewhere
import { getAllTasks } from '../repository/TaskRepository';

const Index = () => {
	const [isButtonClickable, setIsButtonClickable] = useState(false);
	const [tasks, setTasks] = useState<Task[]>([]);


	useEffect(() => {
		const fetchTasks = async () => {
			const fetchedTasks = await getAllTasks();
			setTasks(fetchedTasks);
		};

		fetchTasks();
	}, []);

	const handleAdd = () => toggleAddButtonsVisibility(isButtonClickable, setIsButtonClickable);

	const handleAddNewTask = () => newTask(setTasks);

	const handleAddNewCategory = () => newCategory(isButtonClickable, setIsButtonClickable);

	const handleCompleteTask = async (taskId?: number) => completeTask(setTasks, taskId);

	return (
		<Page>
			<Section>
				<div className={styles.taskList}>
					{tasks.map(task => (
						<div key={task.id} className={styles.taskItem}>
							<span>{task.name}</span>
							<Button variant="contained" color="primary" onClick={() => handleCompleteTask(task.id)} className={styles.completeButton}>
								Complete
							</Button>
						</div>
					))}
				</div>
				<Fab color="primary" aria-label="add" onClick={handleAdd} className={`${styles.fabStyle} ${styles.bottom100}`}>
					<AddIcon />
				</Fab>
				{isButtonClickable && (
					<>
						<Fab variant="extended" onClick={handleAddNewTask} color="primary" aria-label="add" className={`${styles.fabStyle} ${styles.bottom170}`}>
							<AddIcon />
							<span className='fabText'>New Task</span>
						</Fab>
						<Fab variant="extended" onClick={handleAddNewCategory} color="primary" aria-label="add" className={`${styles.fabStyle} ${styles.bottom240}`}>
							<AddIcon />
							<span className='fabText'>New Category</span>
						</Fab>
					</>
				)}
			</Section>
		</Page>
	);
}

export default Index;
