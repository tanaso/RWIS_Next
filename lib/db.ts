// db.js
import Dexie from 'dexie';

export const db = new Dexie('myDatabase');

db.version(1).stores({
    flowers: '++id, color, water' // Primary key and indexed props
});

db.version(1).stores({
    users: '++id, water, seed, cut' // Primary key and indexed props
});
