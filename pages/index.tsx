import React, { useState } from 'react';
import Page from '@/components/page';
import Section from '@/components/section';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import styles from '../styles/Index.module.css';
import {toggle} from './index_component/indexLogic';

const Index = () => {
	const [isButtonClickable, setIsButtonClickable] = useState(false);

	const handleAdd = () => toggle(isButtonClickable, setIsButtonClickable);

	return (
		<Page>
			<Section>
				<div className={styles.flexColumnCenter}>
					<h1 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
						Category A
					</h1>
					{/* Repeated Buttons can be further optimized */}
					<Button variant="outlined" className={styles.buttonStyle}>
						TaskList
					</Button>
					<Button variant="outlined" className={styles.buttonStyle}>
						Garden
					</Button>
					<Button variant="outlined" className={styles.buttonStyle}>
						Encyclopedia
					</Button>
				</div>
				<Fab color="primary" aria-label="add" onClick={handleAdd} className={`${styles.fabStyle} ${styles.bottom100}`}>
					<AddIcon />
				</Fab>
				{/* Conditional display can be streamlined */}
				{isButtonClickable && (
					<>
						<Fab variant="extended" color="primary" aria-label="add" className={`${styles.fabStyle} ${styles.bottom170}`}>
							<AddIcon />
							<span className='fabText'>New Task</span>
						</Fab>
						<Fab variant="extended" color="primary" aria-label="add" className={`${styles.fabStyle} ${styles.bottom240}`}>
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
