import Dexie, { Table } from 'dexie';
import { Task } from '@/model/Task';
import { Flower } from '@/model/Flower';
import { User } from '@/model/User';
import { Category } from '@/model/Category';

// Extend Dexie class with typed tables
export class MyDatabase extends Dexie {
    flowers!: Table<Flower, number>; // 'number' is the type of the primary key
    users!: Table<User, number>;
    tasks!: Table<Task, number>;
    categories!: Table<Category, number>;

    constructor() {
        super('myDatabase');
<<<<<<< HEAD

        this.version(8).stores({
            flowers: '++id, position, color, waterPoints',
            users: '++id, waterPoints, numberOfSeeds, cuttingPoints',
            tasks: '++id, name, creationDate, deadline, periodInDays, categoryName, seedReward',
            categories: '++id, &name',
=======
        this.version(1).stores({
            flowers: '++id, position, color, waterPoints',
            users: '++id, waterPoints, numberOfSeeds, cuttingPoints',
            tasks: '++id, name, creationDate, deadline, periodInDays, categoryName, seedReward',
            // categories: ''
>>>>>>> ac7cbffce2f85085aed9dd72fb63ded263710982
        });

        // Connect the class properties with the database tables
        this.flowers = this.table('flowers');
        this.users = this.table('users');
        this.tasks = this.table('tasks');
        this.categories = this.table('categories');

        this.setupHooks();
    }

    private setupHooks(): void {
        this.users.hook('updating', (modifications, primaryKey, obj, transaction) => {
            const updates = modifications as Partial<User>;

            if (modifications.hasOwnProperty('waterPoints')) {
                const newWaterPoints: number = updates.waterPoints as number;
                if (newWaterPoints < 0) {
                    throw new Error("waterPoints must not be negative");
                }
            }

            if (modifications.hasOwnProperty('cuttingPoints')) {
                const newCuttingPoints: number = updates.cuttingPoints as number;
                if (newCuttingPoints < 0) {
                    throw new Error("cuttingPoints must not be negative");
                }
            }

            if (modifications.hasOwnProperty('numberOfSeeds')) {
                const newNumberOfSeeds: number = updates.numberOfSeeds as number;
                if (newNumberOfSeeds < 0) {
                    throw new Error("numberOfSeeds must not be negative");
                }
            }
        });
    }
}

export const db = new MyDatabase();
