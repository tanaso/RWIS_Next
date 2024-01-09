import { addNewCategory, getAllCategories } from "../../repository/categoryRepository";
import { Category } from "../../model/Category";

export const newCategoryLogic = async(name : string) => {
    
    const category = new Category(name);
    try {
        await addNewCategory(category);
        console.log('Category created');
    } catch (error: any) {
        throw new Error('Error creating Category: ' + error.message);
    }
}

export const getAllCategoriesNames = async () => {
    const categories = await getAllCategories();
    return categories.map(category => category.name);
}