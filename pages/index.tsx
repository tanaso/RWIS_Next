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
		<div style={{ backgroundColor: '#D0EFDB' }}>
			<Page> 
				<Section>
				<div style={{ textAlign: 'center' }}>
            	<h1 style={{ fontSize: '3em', marginBottom: '5px', color: '#2A6B41', fontWeight: 'bold' }}>Task List</h1>
				</div>
					{/* <div className={styles.flexColumnCenter}>
						<h1 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
							Category A
						</h1>
						<Button variant="outlined" className={styles.buttonStyle}>
							TaskList
						</Button>
						<Button variant="outlined" className={styles.buttonStyle}>
							Garden
						</Button>
						<Button variant="outlined" className={styles.buttonStyle}>
							Encyclopedia
						</Button>
					</div> */}
					<Fab color="primary" aria-label="add" onClick={handleAdd} className={`${styles.fabStyle} ${styles.bottom100}`}>
						<AddIcon />
					</Fab>
					{/* Conditional display can be streamlined */}
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
		</div>
	);
	
}

export default Index;
