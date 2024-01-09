import React, { useState } from 'react';
import Page from '@/components/page';
import Section from '@/components/section';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from '../styles/Index.module.css';
import { useRouter } from 'next/router';
import { newCategoryLogic } from '@/components/categoryComponent/categoryComponent';


const NewCategory = () => {
    const [name, setName] = useState('');
    const router = useRouter();

    const handleNewCategorySubmit = async (event: any) => {
        event.preventDefault();
        if (!name.trim()) {
            alert("Category name must not be empty."); 
            return; 
        }
        await newCategoryLogic(name);
        router.push('/');
    };

    return (
        <Page>
            <Section>
                <form onSubmit={handleNewCategorySubmit} className={`${styles.formStyle} ${styles.whiteText}`}>
                    <TextField
                        id="categoryName"
                        label="Category Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ className: styles.whiteText }}
                        inputProps={{ className: styles.whiteText }}
                    />
                    <Button type="submit" variant="contained" color="primary" className={styles.whiteText}>
                        Create Category
                    </Button>
                </form>
            </Section>
        </Page>
    );
};

export default NewCategory;