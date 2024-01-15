import { db } from "../lib/db";
import { Category } from "../model/Category";

export function getAllCategories(): Promise<Category[]> {
    return db.categories.toArray();
}

export function addNewCategory(category: Category): Promise<number> {
    return db.categories.add(category);
}
