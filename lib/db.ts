import Dexie, { Table } from 'dexie';
import { Task } from '../model/Task';
import { Flower } from '../model/Flower';
import { User } from '../model/User';

// Extend Dexie class with typed tables
export class MyDatabase extends Dexie {
    flowers!: Table<Flower, number>; // 'number' is the type of the primary key
    users!: Table<User, number>;
    tasks!: Table<Task, number>;

    constructor() {
        super('myDatabase');
        this.version(5).stores({
            flowers: '++id, color, waterPoints',
            users: '++id, waterPoints, numberOfSeeds, cuttingPoints',
            tasks: '++id, name, creationDate, deadline, periodInDays, categoryName, seedReward',
        });

        // Connect the class properties with the database tables
        this.flowers = this.table('flowers');
        this.users = this.table('users');
        this.tasks = this.table('tasks');
    }
}

export const db = new MyDatabase();
